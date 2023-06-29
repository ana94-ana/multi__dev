import { ref } from "vue"
export default (function homeCustom() {

    const customtitle = ref(
        {
            title: "Your Dedicated Web Design & Development Team",
            description: 'We are small team of experts that have been building on the internet for over a decade. We are passionate about helping businesses thrive online and creating user-focused websites that drive real results.',
        },
    )

    const custom = ref(
        {
            icone: "@/assets/images/custom.icon.svg",
            title: 'Custom Websites',
            description: 'Whether you’re looking to build a custom marketing website or the next Twitter we can help you build it.',
        }

    )
    const search = ref(
        {
            icone: '@/assets/images/search.icon.svg',
            title: 'Search Engine Optimization',
            description: 'You’ve got yourself a beautiful website but now  you need your customers to find it, let us help you.',
        }
    )

    return { customtitle, custom, search }
})
