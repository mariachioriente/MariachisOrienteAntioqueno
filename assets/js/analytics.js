/*=============== GOOGLE TAG (ANALYTICS 4 + GOOGLE ADS) ===============*/
// GA4: Administrar > Flujos de datos > Web
const GA_MEASUREMENT_ID = 'G-7J5GB5DQ80'
// Google Ads: Herramientas > Conversiones > Etiqueta de Google
const GOOGLE_ADS_ID = 'AW-18538886763'

const gaScript = document.createElement('script')
gaScript.async = true
gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
document.head.appendChild(gaScript)

window.dataLayer = window.dataLayer || []
window.gtag = function () { dataLayer.push(arguments) }
gtag('js', new Date())
gtag('config', GA_MEASUREMENT_ID)
gtag('config', GOOGLE_ADS_ID)

/*=============== EVENTOS DE CONTACTO ===============*/
// Registra clics a WhatsApp, teléfono y email (márcalos como "eventos clave" en GA4)
document.addEventListener('click', (e) => {
    const link = e.target.closest('a')
    if (!link) return

    const href = link.href
    let eventName = null
    if (href.includes('wa.me')) eventName = 'click_whatsapp'
    else if (href.startsWith('tel:')) eventName = 'click_telefono'
    else if (href.startsWith('mailto:')) eventName = 'click_email'
    if (!eventName) return

    gtag('event', eventName, {
        pagina: location.pathname,
        texto_enlace: link.textContent.trim() || link.className
    })
})
