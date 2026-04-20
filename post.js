const posts = [
  {
    id: 1,
    title: "¿Qué opinan? Tengo 35 años vivo con mi mamá aún y lucho mucho por terminar una carrera y estudio otra pero le pido que fria mi comida y me dice que no tiene tiempo y solo me aguanto sin comer por estar estudiando y mejor pido ayuda a terceros?",
    content: "Este es el contenido de mi primer post.",
    category: "general",
    createdAt: "2026-04-12",
    likes: 2,
    liked: false,
    comments: [
      {
        id: 1,
        user: "Juan",
        content: "Buen post 👏",
        createdAt: "2026-04-13"
      },
      {
        id: 2,
        user: "Ana",
        content: "Me gustó mucho 🙌",
        createdAt: "2026-04-14"
      }
    ]
  },
  {
    id: 2,
    title: "Aprendiendo React Native",
    content: "Hoy estoy construyendo mi primera app móvil.",
    category: "learning",
    createdAt: "2026-04-12",
    likes: 5,
    liked: true,
    comments: [
      {
        id: 1,
        user: "Carlos",
        content: "React Native es muy bueno 🚀",
        createdAt: "2026-04-13"
      }
    ]
  },
  {
    id: 3,
    title: "Notas personales",
    content: "Organizando mi información en una app.",
    category: "personal",
    createdAt: "2026-04-12",
    likes: 1,
    liked: false,
    comments: [ {
        id: 1,
        user: "Julian Ontiveros",
        content: "Verificando los comentarios 3 👏",
        createdAt: "2026-04-13"
      },] // importante: siempre array aunque esté vacío
  }
]

export default posts