<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
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


    //- Segundo bloque: Banner 
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Intro/bannermicro2.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Comprender el origen, la clasificación, la función y la regulación de los aditivos permite interpretar de manera adecuada los análisis físicoquímicos aplicados a los alimentos y tomar decisiones informadas dentro de los procesos de control de calidad. Este componente desarrolla los conceptos esenciales y su aplicación práctica, promoviendo el uso responsable y normado de los aditivos en coherencia con las exigencias del sector alimentario.

    //- Tercer bloque: Podcast
    .tarjeta.color-primario.p-4.p-md-5
      .row.align-items-center.justify-content-center
        .col-md-5.col-lg-4.mb-4.mb-md-0
          figure
            img(src="@/assets/curso/Intro/podcast.svg", alt="Icono decorativo Podcast")
        .col-md-7.col-lg-6
          h4.texto-blanco.mb-3 Podcast
          .tarjeta.tarjeta--blanca.p-3
            p.text-bold.mb-2 Etiquetas bajo la lupa
            audio.w-100(controls)
              source(src="@/assets/curso/audios/podcast-intro.mp3", type="audio/mpeg")
              | Tu navegador no soporta el elemento de audio.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
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

<style lang="sass"></style>
