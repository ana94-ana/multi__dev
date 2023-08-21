//import { ref } from "vue"
import custom from '@/assets/images/custom.icon.svg'
import search from '@/assets/images/search.icon.svg'
//import axios from "axios"

export default function homeCustom() {

    return {
        icone: { custom, search, },
        title: 'Your Dedicated Web Design & Development Team',
        description: 'We are small team of experts that have been building on the internet for over a decade. We are passionate about helping businesses thrive online and creating user-focused websites that drive real results.'
    }

    /*const icone = ref({})
    const title = ref({})
    const description = ref({})

    const getHomeCustom = async () => {
        const { data } = await axios.get('')

        icone.value=data.icone
        title.value=data.title
        description.value=data.description

    } 
    return {getHomeCustom}  */




}
