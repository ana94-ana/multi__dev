import women from '@/assets/images/womenAvatar.svg'
import men from '@/assets/images/menAvatar.svg'
import girl from '@/assets/images/girlavatar.svg'
//import { ref } from 'vue'
//import axios from 'axios'

export default function carousel() {
    return {
        icone: { women, men, girl },
        title: "First slide label",
        descriptions: "Some representative placeholder content for the first slide."
    }

    /*const icone = ref({})
    const title = ref()
    const descriptions = ref()

    const getCarousel = async () => {

        const { data } = await axios.get('')

        icone.value = data.icone
        title.value = data.title
        descriptions.value = data.descriptions
    }

    return { getCarousel } */



}