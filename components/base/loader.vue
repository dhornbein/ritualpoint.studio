<template>
  <div class="moonloading">
    <div>&nbsp;</div>
  </div>
</template>

<style lang="scss">
  $c0: #eee;
  $c1: #222;
  $d: 8em;
  $t: 2s;

  .moonloading {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    div,
    div:before,
    div:after {
      border-radius: 50%;
      background: linear-gradient(90deg, $c0 calc(var(--i, .5)*100%), $c1 0);
    }

    div {
      width: $d;
      height: $d;
      animation: flip 2*$t steps(1) infinite;

      &:before,
      &:after {
        --i: 0;
        backface-visibility: hidden;
        transform: rotatey(calc((var(--i) + 1)*.5turn));
        animation: roty $t ease-in-out infinite alternate;
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }

      &::after {
        --i: 1
      }
    }
  }



  @keyframes flip {
    50% {
      transform: scale(-1)
    }
  }

  @keyframes roty {
    0% {
      transform: rotatey(calc(var(--i)*.5turn))
    }
  }
</style>