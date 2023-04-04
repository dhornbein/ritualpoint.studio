import Airtable from 'airtable'
const runtimeConfig = useRuntimeConfig()
const { airtable_api } = runtimeConfig
const baseId = 'appgxDdXmZJwrHxWM'
let base = new Airtable({ apiKey: airtable_api }).base(baseId)


export default defineEventHandler(async (event) => {
  const id = event.context.params.id

  try {
    const record = await base('Tattoos').find(id);

    console.log('record', record);

    return {
      data: record.fields,
      status: 200
    }
  } catch (err) {
    console.error(err);
    return {
      error: err,
    }
  }
})