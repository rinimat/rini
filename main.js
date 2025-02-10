import './style.css'

const links = [
  {
    text: "Скопіювати номер картки",
    icon: "fa-solid fa-credit-card",
    action: () => copyCard()
  },
  {
    text: "Голосовий донат🥳",
    icon: "fa-solid fa-microphone",
    url: "https://sashamatyuchenko.donatik.io/goal/na-kompyudaster-"
  },
  {
    text: "Банка моно",
    icon: "fa-solid fa-piggy-bank",
    url: "https://send.monobank.ua/jar/5cr4GxQpuD"
  },
  {
    text: "Наш телеграм",
    icon: "fa-brands fa-telegram",
    url: "https://t.me/RINIMATIK"
  },
  {
    text: "Мій Твіч",
    icon: "fa-brands fa-twitch",
    url: "https://www.twitch.tv/rinimat"
  },
  {
    text: "Ютуб канал",
    icon: "fa-brands fa-youtube",
    url: "https://youtube.com/@rinimat1712"
  },
  {
    text: "Інстаграм",
    icon: "fa-brands fa-instagram",
    url: "https://instagram.com/sson_off_god?igshid=YmMyMTA2M2Y="
  }
]

function copyCard() {
  const cardNumber = "5457082507462716"
  navigator.clipboard.writeText(cardNumber)
  showCopySuccess()
}

function showCopySuccess() {
  const notification = document.querySelector('.copy-success')
  notification.classList.add('show')
  setTimeout(() => {
    notification.classList.remove('show')
  }, 2000)
}

document.querySelector('#app').innerHTML = `
  <div>
    <img src="https://i.imgur.com/5DZnQR0.jpeg" alt="RINIMAT" class="profile-image">
    <h1 class="title">Всім дуже вдячний за підтримку</h1>
    <p class="subtitle">🫱🏻‍🫲🏽Обняв заплакав🫱🏻‍🫲🏽</p>
    
    <div class="buttons-container">
      ${links.map(link => `
        <${link.url ? 'a' : 'button'}
          class="button"
          ${link.url ? `href="${link.url}" target="_blank" rel="noopener noreferrer"` : 'onclick="' + link.action + '();"'}
        >
          <i class="${link.icon}"></i>
          ${link.text}
        </${link.url ? 'a' : 'button'}>
      `).join('')}
    </div>
    
    <div class="copy-success">
      Номер картки скопійовано!
    </div>
  </div>
`

// Re-attach event listener for card copy button
document.querySelector('button.button').onclick = copyCard