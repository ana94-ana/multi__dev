//import { ref } from "vue"
//import axios from '@/interceptors/axios'
import logoAegiLiving from '@/assets/images/aegisliving.svg'
import logoProduction from '@/assets/images/KOJIMA-PRODUCTIONS-.svg'
import logoDoctor from '@/assets/images/doctor-butlers.svg.svg'
import logoTelepsychiatry from '@/assets/images/telepsychiatry-svg.svg.svg'
import logoUnited from '@/assets/images/united-way.svg.svg'

export default function homeOne() {

  return {
    title: "We Design & Develop Websites That Deliver Results",
    description: 'Our goal is to develop simple and modern websites that are optimized  for both search engines and user experience, ultimately driving more traffic and revenue to your business.',
    logo: { logoAegiLiving, logoProduction, logoDoctor, logoTelepsychiatry, logoUnited }
  }

 /* const title = ref()
  const descriptions = ref()
  const logo =ref()

  const getHomeOne = async () => {
    const {data} = await axios.get('')

    title.value= data.title
    descriptions.value=data.descriptions
    logo.value=data.logo
  }
  return {getHomeOne} */

}


