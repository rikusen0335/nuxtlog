<template>
  <div>
    <n-link
      to="/"
      class="text-reset text-decoration-none">
      <div class="card text-left mb-5">
        <img
          src="/wallhaven.jpg"
          class="card-img-top">
        <div class="card-body">
          <h5 class="card-title text-center">
            NuxtJSでブログを作りました
          </h5>
          <p class="card-text">親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど...</p>
          <p class="card-text text-right">
            <small class="text-muted mr-3">
              <span class="mdi mdi-sync"></span>
              2019 / 06 / 27
            </small>
            <small class="text-muted">
              <span class="mdi mdi-clock-outline"></span>
              2019 / 06 / 25
            </small>
          </p>
        </div>
      </div>
    </n-link>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: 1px solid #f2f8f9;
  transition: .3s;

  &:hover {
    border: 1px solid #42b883;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    z-index: 500;
  }

  img {
    height: 250px;
    object-fit: cover;
  }
}
</style>