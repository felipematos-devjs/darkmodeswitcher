import { SocialBadge } from "../components/SocialBadge"

//little constant file so my app.jsx file won't be clogged
export const modalDescription = 
(
<p>This website was made by
<br/>
<br/>
<em>-Felipe de Oliveira Matos -</em>
<br/>
<br/>
Frontend Developer, coding enthusiast, proud nerd.
Feel free to contact me if you wish to connect!
</p>
)

export const modalSocials = 
(
<>
  <section className='social-media'>
    <SocialBadge link='https://www.linkedin.com/in/felipe-matos-94405526a/' badgesrc='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'/>
    <SocialBadge link='https://github.com/felipematos-devjs' badgesrc='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'/>
    <SocialBadge link='https://twitter.com/FelipeJsDev' badgesrc='https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white'/>
  </section>
  <section className='social-media'>
    <SocialBadge link='mailto:felipematos.devjs@gmail.com' badgesrc='https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white'/>
    <SocialBadge link='https://discordapp.com/users/1061712066030878841' badgesrc='https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white'/>
  </section>
</>
)