import { ref } from "vue"

export default (function navigation() {

	const menuLinks = ref([])
    const footerLinks = ref([
        { name: 'Home', title: 'Home' },
        { name: 'Servises', title: 'Servises' },
        { name: 'Ourwork', title: 'Our Work' },
        { name: 'Blog', title: 'Blog' },
        
    ])



	let instance = { menuLinks, footerLinks}      

	return () => {
		return instance
	}
})()