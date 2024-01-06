import { ref } from "vue"

export default (function navigation() {

	const menuLinks = ref([])
    const footerLinks = ref([
        { name: 'Home', title: 'Home' },
       
        
    ])



	let instance = { menuLinks, footerLinks}      

	return () => {
		return instance
	}
})()