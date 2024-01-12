import love from '@/assets/icone/love.svg'
import kalata from '@/assets/icone/kalata.svg'
import monaliza from '@/assets/galery/image/monaliza.png'
import erminit from '@/assets/galery/image/qalbatoniErminit.png'
import salvator from '@/assets/galery/image/salvator.png'
import madona from '@/assets/galery/image/mixakisMadona.png'



export default function cards() {

    return {
      title: "მონა ლიზა",
      price: '5000$',
      image:{monaliza, erminit, salvator, madona},
      icone: {love, kalata  }
    }
}