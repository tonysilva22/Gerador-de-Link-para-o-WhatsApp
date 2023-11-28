function isValidPhoneNumber(phoneNumber) {

    const phoneRegex = /^[0-9]{10,}$/
    return phoneRegex.test(phoneNumber);
  }
  
  function generateLink() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
  
    if (!isValidPhoneNumber(phoneNumber)) {
      alert('Por favor, insira um número de telefone válido.');
      return;
    }
    
    let whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}`;
  
    if (message) {
      whatsappLink += `&text=${encodeURIComponent(message)}`;
    }
  
    const whatsappLinkInput = document.getElementById('whatsappLink');
    whatsappLinkInput.value = whatsappLink;
  }
  
  function copyLink() {
    const whatsappLinkInput = document.getElementById('whatsappLink');
    whatsappLinkInput.select();
    whatsappLinkInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Link copiado para a área de transferência!');
  }
  