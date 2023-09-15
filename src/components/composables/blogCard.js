import axios from '@/interceptors/axios'
import { ref } from 'vue'


export default (function blogCard() {
   /* return {
        image: { featured, landing, design, create, way, splash, yourwebsite, flebsbox },
        title: 'Custom WordPress Development: A Comprehensive Guide',
        description: 'Should you use a WordPress Theme or go with Custom WordPress Development from scratch? It all depends on your business goals.',
        dataTime: 'Nick Meagher | May 11, 2023'

    }*/

    const id=ref()
    const avatar = ref()
    const title = ref()
    const description = ref()
    const url = ref()


    const getBlogCard = async () => {
        let { data } = await axios.get('/api/projects')

        id.value=data.id
        avatar.value = data.avatar
        title.value = data.title
        description.value = data.description
        url.value = data.url
    }

        

	let instance = { avatar, title, description, url, getBlogCard }      

	return () => {
		return instance
	}

})()
