import { ref } from "vue"
export default (function homeOne() {

  const homeOneSection = ref(
    {
      title: "We Design & Develop Websites That Deliver Results",
      description: 'Our goal is to develop simple and modern websites that are optimized  for both search engines and user experience, ultimately driving more traffic and revenue to your business.',
      button: `Let's Talk `,
      logoAegiLiving: '@/assets/images/aegisliving.svg',
      logoProduction: "@/assets/images/KOJIMA-PRODUCTIONS-png.png.svg",
      logoDoctor: "@/assets/images/doctor-butlers.svg.svg",
      logoTelepsychiatry: "@/assets/images/telepsychiatry-svg.svg.svg",
      logoUnited: "@/assets/images/united-way.svg.svg",
    },
  )

  return { homeOneSection }
})


