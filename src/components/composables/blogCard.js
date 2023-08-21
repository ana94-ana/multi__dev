import featured from '@/assets/images/a.post-featured-image.png'
import landing from '@/assets/images/0Landingdiv.row.png'
import design from '@/assets/images/designcompany.png'
import create from '@/assets/images/create.png'
import way from '@/assets/images/way.png'
import splash from '@/assets/images/splash.png'
import yourwebsite from '@/assets/images/yourwebsite.png'
import flebsbox from '@/assets/images/flebsbox.png'
//import axios from 'axios'
//import { ref } from 'vue'


export default function blogCard() {
    return {
        image: { featured, landing, design, create, way, splash, yourwebsite, flebsbox },
        title: 'Custom WordPress Development: A Comprehensive Guide',
        description: 'Should you use a WordPress Theme or go with Custom WordPress Development from scratch? It all depends on your business goals.',
        dataTime: 'Nick Meagher | May 11, 2023'

    }

   /* const image = ref({})
    const title = ref()
    const description = ref()
    const dataTime = ref()


    const getBlogCard = async () => {
        const { data } = await axios.get('')

        image.value = data.image
        title.value = data.title
        description.value = data.description
        dataTime.value = data.dataTime
    }
    return { getBlogCard }  */

}
