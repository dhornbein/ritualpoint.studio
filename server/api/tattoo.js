import Airtable from 'airtable'
const runtimeConfig = useRuntimeConfig()
const { airtable_api, imgur_client_id } = runtimeConfig

const baseId = 'appgxDdXmZJwrHxWM'
let base = new Airtable({ apiKey: airtable_api }).base(baseId)



export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event)

  console.log('formData', formData);
  
  const fields = formToFields(formData)

  console.log('Setup fields',fields);

  // search for existing client record with email, if not found, create new record, otherwise get record id and update existing record
  const records = await base('Clients').select({
    filterByFormula: `email = "${fields.email}"`
  }).firstPage();

  console.log('search for existing client record returned:', records.length);

  let clientRecordId = null;

  if (records.length === 0) {
    const record = await base('Clients').create([{
      fields: {
        "name": fields.client,
        "email": fields.email,
        "phone": fields.phone,
      }
    }]);
    console.log('created new client record', record[0]);
    clientRecordId = record[0].id;
  } else {
    const record = await base('Clients').update([{
      id: records[0].id, fields: {
        "name": fields.client,
        "phone": fields.phone,
      }
    }]);
    console.log('updated client record', record);
    clientRecordId = records[0].id;
  }

  // for every array in fields, run a function to upload to imgur, then update the array with the imgur link
  for (const key in fields) {
    if (Array.isArray(fields[key])) {
      const arr = await Promise.all(fields[key].map(async function (image) {
        
        const formData = new FormData()
        formData.append('image', image.data.toString('base64'))
        formData.append('type', 'base64')

        const res = await fetch('https://api.imgur.com/3/upload', {
          method: 'POST',
          headers: {
            Authorization: `Client-ID ${imgur_client_id}`
          },
          body: formData
        });

        const data = await res.json();
        
        console.log('uploaded image to imgur', data);
        
        return data.data.link;
      }));
      fields[key] = arr;
    }
  }

  console.log('client record',clientRecordId);

  // create new tattoo record with links to client record

  try {
    const record = await base('Tattoos').create([{ fields: {
      "Name": fields.name,
      "Client": [clientRecordId],
      "email": fields.email,
      "Phone": fields.phone,
      "Notes": fields.notes,
      "Inspiration": fields.inspiration.map(url => ({ url })),
    } }]);

    return {
      data: record[0],
      status: 200
    }
  } catch (err) {
    console.error('tattoo creation error',err);
    return {
      error: err,
      status: err.statusCode
    }
  }
})

function formToFields(formData) {
  return formData.reduce((acc, { name, filename, type, data }) => {
    if (!filename) {
      acc[name] = data.toString()
      return acc
    }

    if (!acc[name]) {
      acc[name] = [];
    }
    acc[name].push({
      filename,
      type,
      data
    });
    return acc;
  }, {});
}