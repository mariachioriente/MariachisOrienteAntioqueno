/*=============== GOOGLE ANALYTICS 4 ===============*/
// Reemplaza con tu ID de medición de GA4 (Administrar > Flujos de datos > Web)
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

if (!GA_MEASUREMENT_ID.includes('XXXX')) {
    const gaScript = document.createElement('script')
    gaScript.async = true
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(gaScript)

    window.dataLayer = window.dataLayer || []
    window.gtag = function () { dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', GA_MEASUREMENT_ID)

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
}
