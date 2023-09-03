import figma from '@/assets/logo/figma.svg.svg'
import wordpres from '@/assets/logo/wordpress.svg.svg'
import woo from '@/assets/logo/woo.svg.svg'
import cubs from '@/assets/logo/Cubs.svg'
import clippathgroup from '@/assets/logo/Clippathgroup.svg'
//import { ref } from 'vue'
//import axios from '@/interceptors/axios'

export default function technologies(){
    return {
        icone:{figma, wordpres, woo, cubs, clippathgroup }
    }

    /*const icone = ref()

    const getIcones =async () => {

        const {data} = await axios.get('')

        icone.value= data.icone
    }
    
    return {getIcones} */


}