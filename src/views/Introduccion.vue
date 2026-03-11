<template lang="pug">
.curso-main-container.introduccion
  BannerInterno

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    // TITULO
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 
          i.fas.fa-info
      h1 Introducción


    //- Bloque 1: Imagen y texto
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/Intro/Intro.png', alt='Imagen introductoria')
      .col-lg-9
        p.mb-0 Los alimentos procesados hacen parte fundamental de la dieta actual y su calidad depende, en gran medida, de los procesos y sustancias empleadas durante su elaboración. Entre estos elementos se encuentran los aditivos alimentarios, compuestos que cumplen funciones tecnológicas específicas y que inciden directamente en la estabilidad, apariencia, sabor e inocuidad de los productos.


    // BLOQUE Banner con imagen
    .row.justify-content-center.mb-5

      .col-lg-12
        .tarjeta.bloque-info.p-4.p-lg-5

          .row.align-items-center

            .col-lg-9
              p.mb-0
                | Comprender el origen, la clasificación, la función y la regulación de los aditivos permite interpretar de manera adecuada los análisis físicoquímicos aplicados a los alimentos y tomar decisiones informadas dentro de los procesos de control de calidad. Este componente desarrolla los conceptos esenciales y su aplicación práctica, promoviendo el uso responsable y normado de los aditivos en coherencia con las exigencias del sector alimentario.

            .col-lg-3.text-center
              img.icono-info(src='@/assets/curso/Intro/micro3.png')


    // PODCAST
    .row.justify-content-center

      .col-lg-8
        .tarjeta.podcast.p-4.p-lg-5

          .row.align-items-center

            .col-lg-5
              figure
                img(src='@/assets/curso/Intro/podcast3.svg')

            .col-lg-7

              h3.text-white.mb-4 Pódcast

              .tarjeta.tarjeta--blanca.p-4.reproductor

                p.titulo-audio Etiquetas bajo la lupa
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                TarjetaAudio.color-acento-botones.mb-3(
        
        :audio="require('@/assets/curso/audios/podcast-intro.mp3',)"
      )
</template>

<script>
export default {
  name: 'Introduccion',

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },

  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.introduccion

  .hero-intro
    background: linear-gradient(90deg,#eaf3ff,#fde5c6)
    border-radius: 16px
    padding: 40px

  .titulo-intro
    font-size: 28px
    font-weight: 700
    margin-bottom: 20px

  .text-intro
    font-size: 16px
    margin-bottom: 20px

  .bloque-info
    background-color: #EEF3FA
    border-radius: 12px

  .icono-info
    width: 90px

  .podcast
    background-color: #4E8AE1
    border-radius: 16px

  .reproductor
    border-radius: 12px

  .titulo-audio
    font-weight: 600
</style>
