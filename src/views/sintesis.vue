<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Evaluación de la calidad e inocuidad de los alimentos mediante APPCC aborda los fundamentos conceptuales de la calidad, la inocuidad y su relación con la salud pública, desarrollando el enfoque preventivo del sistema de Análisis de Peligros y Puntos Críticos de Control (APPCC) como herramienta técnica para la gestión del riesgo. Se estudian los programas prerrequisito, las Buenas Prácticas de Manufactura, los programas de saneamiento, la trazabilidad, el control de proveedores y la cultura organizacional como bases estructurales del sistema, así como los siete principios del APPCC aplicados a procesos específicos de la industria alimentaria.
    p Asimismo, profundiza en los procesos de validación y verificación conforme a estándares internacionales como el Codex Alimentarius e ISO 22000, integrando criterios científicos, documentación técnica y control operativo para garantizar la eficacia de las medidas implementadas. Finalmente, se analizan tendencias actuales y desafíos emergentes en inocuidad alimentaria, fortaleciendo una visión estratégica que articula innovación, análisis de riesgo y mejora continua, en coherencia con la protección de la salud pública y las exigencias regulatorias del sector.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
