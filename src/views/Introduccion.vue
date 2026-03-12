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
    .row.justify-content-center.mb-5
      .col-lg-12.col-12
       .contenedor-banner-limitado
        .banner-principal-fondo.p-3.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-11.col-12.mb-0
              figure
              img(src='@/assets/curso/Intro/operario.png', alt='Operario')
        

            .col-lg-8.col-12.tarjeta.tarjeta--blanca.p-4.shadow.banner-texto-overlap
             p.mb-0 El sistema de Análisis de Peligros y Puntos Críticos de Control (APPCC) es una metodología preventiva fundamentada en el análisis del riesgo, orientada a identificar, evaluar y controlar los peligros biológicos, químicos y físicos que pueden afectar la inocuidad de los alimentos durante las diferentes etapas del proceso productivo. Su implementación permite garantizar el cumplimiento de los requisitos sanitarios establecidos por la normativa vigente y reducir la probabilidad de enfermedades transmitidas por alimentos, fortaleciendo la protección de la salud pública.
        
      

    // BLOQUE Banner naranja + icono + con imagen a la derecha
    .row.justify-content-center.align-items-center.mb-5

      .col-lg-9
        .tarjeta.bloque-banner-intro.p-4.p-lg-5

          .row.justify-content-center

            .col-lg-1.d-none.d-lg-block
              img(src='@/assets/curso/Intro/ondas.svg', alt='Decoración')
            .col-lg-10
              p.mb-0
                | En el desarrollo de este componente formativo, consolidan en el aprendiz competencias para aplicar los principios del sistema APPCC en contextos productivos reales, mediante la identificación de peligros significativos, la determinación de puntos críticos de control y el establecimiento de medidas preventivas y correctivas. Este enfoque promueve una gestión sistemática de la inocuidad, alineada con estándares internacionales y con las exigencias del sector alimentario nacional.

      .col-lg-3
        figure
        img(src='@/assets/curso/Intro/intro4.svg', alt='Imagen descriptiva')


    
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

  .reproductor
    border-radius: 12px

  .titulo-audio
    font-weight: 600

  .bloque-banner-intro
    background-image: url('../assets/curso/Intro/bannerintro1.svg')
    background-size: cover
    background-position: center
    background-repeat: no-repeat
    border-radius: 12px
    min-height: 180px
  .banner-curso
    border-radius: 12px
    min-height: 200px
    padding: 2rem
    background-size: cover
    background-position: center
    background-repeat: no-repeat
    display: flex
    align-items: center

  .banner-intro-fondo
    background-size: cover
    background-position: center
    border-radius: 20px
    background-repeat: no-repeat

  .contenedor-banner-limitado
    overflow: visible // Permite que el cuadro de texto sobresalga hacia abajo
    width: 100%
    max-width: 100%

  .banner-principal-fondo
    background-image: url('../assets/curso/Intro/banner1.png')
    background-size: cover // Cubre el área sin deformarse
    background-repeat: no-repeat
    background-position: center
    border-radius: 20px
    width: 100%
    padding-bottom: 6rem !important

  .banner-texto-overlap
    background-color: #ffffff !important
    margin-top: -5rem // Ajusta este valor para subir o bajar el cuadro blanco
    z-index: 10
    position: relative
    border: 1px solid #f0f0f0

  .tarjeta--floating
    margin-top: -80px
    background-color: #ffffff !important // Forzamos el blanco si la clase anterior interfiere
    box-shadow: 0 10px 30px rgba(0,0,0,0.08) !important
    z-index: 10
    border: 1px solid #f0f0f0 // Opcional: un borde sutil como en el diseño original
</style>
