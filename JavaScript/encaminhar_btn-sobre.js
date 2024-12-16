document.addEventListener('DOMContentLoaded', function () {
    const btns = document.querySelectorAll('.main-title.-btn-sobre');
    
    btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const buttonId = btn.id;
            let serviceTitle = '';
            switch (buttonId) {
                case 'btn-s1':
                    serviceTitle = 'Serviços Contábeis';
                    break;
                case 'btn-s2':
                    serviceTitle = 'Consultoria Societária e Empresarial';
                    break;
                case 'btn-s3':
                    serviceTitle = 'Comércio Exterior e Processos Aduaneiros';
                    break;
                case 'btn-s4':
                    serviceTitle = 'Propriedade Intelectual';
                    break;
                case 'btn-s5':
                    serviceTitle = 'Licitações e Contratos';
                    break;
                case 'btn-s6':
                    serviceTitle = 'Corretagem e Seguros';
                    break;
                case 'btn-s7':
                    serviceTitle = 'Serviços Administrativos';
                    break;
                default:
                    serviceTitle = 'Serviço Desconhecido';
            }
            const encodedServiceTitle = encodeURIComponent(serviceTitle);
            const whatsappURL = `https://wa.me/5515988295370?text=Quero%20saber%20mais%20sobre%20${encodedServiceTitle}`;
            window.open(whatsappURL, '_blank');
        });
    });
});
