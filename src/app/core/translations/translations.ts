export type Lang = 'fr' | 'en';

export const translations: Record<Lang, Record<string, string>> = {
  fr: {
    // Nav / sidebar
    'nav.home': 'Accueil',
    'nav.documents': 'Nos documents',
    'nav.aboutUs': 'À propos de nous',
    'nav.contact': 'Nous joindre',

    // Footer
    'footer.home': 'Accueil',
    'footer.documents': 'Nos documents',
    'footer.aboutUs': 'À propos de nous',
    'footer.contact': 'Nous joindre',
    'footer.copyright': "Groupe Scidemia S.E.N.C. n'est affilié à aucun collège ou université. 2026 Scidemia. Tous droits réservés",

    // Accueil (home)
    'accueil.heroTitle': "Facilite ton temps d'études",
    'accueil.heroSubtitle': 'Notes de cours faits par des étudiants, conçus pour des étudiants',
    'accueil.missionTitle': 'Notre mission',
    'accueil.missionStatement': "Notre mission est de faciliter le temps d'études de chacun afin de contribuer à leur réussite.",
    'accueil.servicesTitle': 'Notre service',
    'accueil.serviceNote': "Trouve des cahiers de prise de notes pour t'aider à étudier plus efficacement.",
    'accueil.documentsBtn': 'Nos documents',

    // About us
    'about.title': 'À propos de nous',
    'about.subtitle': "Scidemia est une plateforme offrant des cahiers de prise de notes en sciences et technologies pour t'aider à étudier plus efficacement.",
    'about.tagline': "Que tu sois en première année de CÉGEP ou sur le point de terminer ton baccalauréat, Scidemia offre une variété de documents pouvant rendre ta session d'études plus facile.",
    'about.buyAdvantagesTitle': "Avantages d'acheter des cahies de notes",
    'about.advantage1Title': 'Permet de sauver du temps',
    'about.advantage1Desc': "Si tu as besoin de faire des notes détaillées pour un cours, les documents de notes de cours te permettront de gagner du temps et de mieux comprendre le cours.",
    'about.advantage2Title': 'Compléter tes notes de cours en ta possession',
    'about.advantage2Desc': "Accumule non seulement des connaissances, mais aussi des nouvelles stratégies d'études qui pourraient révolutionner ta façon d'étudier.",
    'about.advantage3Title': 'Achete dès maintenant',
    'about.advantage3Desc': "Une fois le document acheté, il sera accessible à partir de ton compte. Chaque document est fourni d'une description du contenu ainsi que des mots-clés pour t'assurer que ton achat ne sera pas gaspillé.",
    'about.viewDocuments': 'Voir nos documents',
    'about.sellAdvantagesTitle': 'Avantages de vendre tes notes',
    'about.sell1Title': 'Télécharge tes documents rapidement',
    'about.sell1Desc': "Si tu as des compétences dans les domaines de la science, tes documents sont recherchés par plusieurs étudiants.",
    'about.sell2Title': 'Monétise tes connaissances',
    'about.sell2Desc': "Transforme tes documents académiques en revenu en les mettant en vente sur notre plateforme. Que tu aies des notes de cours, des guides d'étude ou des résumés, chaque document peut te rapporter de l'argent.",
    'about.sell3Title': 'Commence à gagner dès maintenant',
    'about.sell3Desc': "Une fois tes documents publiés, ils deviennent accessibles à une vaste audience prête à acheter. Plus tes documents sont téléchargés, plus tes gains augmentent.",
    'about.teamTitle': 'Notre équipe',
    'about.teamAlex': 'Alex Gresseau',
    'about.teamAlexRole': 'Responsable en marketing et communication',
    'about.teamKareen': 'Kareen Gresseau',
    'about.teamKareenRole': 'Support technique et développement web',
    'about.teamLoraine': 'Loraine Gresseau',
    'about.teamLoraineRole': 'Responsable du contenu scientifique',

    // Contact
    'contact.title': 'Nous joindre',
    'contact.namePlaceholder': 'Nom',
    'contact.emailPlaceholder': 'Courriel',
    'contact.subjectPlaceholder': 'Sujet',
    'contact.messagePlaceholder': 'Votre message ...',
    'contact.send': 'Envoyer',
    'contact.nameRequired': '* Le nom est requis.',
    'contact.emailRequired': '* Un email valide est requis.',
    'contact.subjectRequired': '* Le sujet est requis.',
    'contact.messageRequired': '* Un message est requis.',
    'contact.success': 'Votre courriel a été envoyé avec succès!',
    'contact.error': "Une erreur est survenue. Veuillez réessayer.",
    'contact.toxicityError': "Votre message a été détecté comme contenant un langage inapproprié. Veuillez reformuler votre message.",
    'contact.toxicityScore': 'Score de toxicité:',
    'contact.rateLimited': 'Veuillez patienter une minute avant d\'envoyer un autre message.',

    // Notes
    'notes.title': 'Nos documents',

    // Document modal
    'modal.buy': 'Acheter',
    'modal.availableSoon': 'Disponible bientôt',
    'modal.previousImage': 'Image précédente',
    'modal.nextImage': 'Image suivante',
    'modal.enlargeImage': "Agrandir l'image",
  },
  en: {
    // Nav / sidebar
    'nav.home': 'Home',
    'nav.documents': 'Our documents',
    'nav.aboutUs': 'About us',
    'nav.contact': 'Contact us',

    // Footer
    'footer.home': 'Home',
    'footer.documents': 'Our documents',
    'footer.aboutUs': 'About us',
    'footer.contact': 'Contact us',
    'footer.copyright': 'Scidemia Group Inc. is not affiliated with any college or university. 2026 Scidemia. All rights reserved.',

    // Accueil (home)
    'accueil.heroTitle': 'Simplify your study time',
    'accueil.heroSubtitle': 'Course notes made by students, designed for students',
    'accueil.missionTitle': 'Our mission',
    'accueil.missionStatement': 'Our mission is to make study time easier for everyone and contribute to their success.',
    'accueil.servicesTitle': 'Our services',
    'accueil.serviceNote': 'Find note-taking notebooks to help you take better and faster notes.',
    'accueil.documentsBtn': 'Our documents',

    // About us
    'about.title': 'About us',
    'about.subtitle': 'Scidemia is a platform offering note-taking notebooks in science and technology to help you take better and faster notes.',
    'about.tagline': 'Whether you\'re in your first year of CEGEP or about to finish your bachelor\'s degree, Scidemia offers a variety of documents to make your study session easier.',
    'about.buyAdvantagesTitle': 'Benefits of buying note notebooks',
    'about.advantage1Title': 'Saves time',
    'about.advantage1Desc': 'If you need to take detailed notes for a course, course note documents will help you save time and better understand the material.',
    'about.advantage2Title': 'Complete the course notes you have',
    'about.advantage2Desc': 'Build not only knowledge but also new study strategies that could revolutionize how you study.',
    'about.advantage3Title': 'Buy now',
    'about.advantage3Desc': 'Once purchased, the document will be accessible from your account. Each document comes with a content description and keywords to ensure your purchase is worthwhile.',
    'about.viewDocuments': 'View our documents',
    'about.sellAdvantagesTitle': 'Benefits of selling your notes',
    'about.sell1Title': 'Upload your documents quickly',
    'about.sell1Desc': 'If you have skills in science-related fields, your documents are in demand by many students.',
    'about.sell2Title': 'Monetize your knowledge',
    'about.sell2Desc': 'Turn your academic documents into income by selling them on our platform. Whether you have course notes, study guides or summaries, each document can earn you money.',
    'about.sell3Title': 'Start earning now',
    'about.sell3Desc': 'Once your documents are published, they become available to a wide audience ready to buy. The more your documents are downloaded, the more you earn.',
    'about.teamTitle': 'Our team',
    'about.teamAlex': 'Alex Gresseau, MBA',
    'about.teamAlexRole': 'Marketing and communications lead',
    'about.teamKareen': 'Kareen Gresseau, BSc',
    'about.teamKareenRole': 'Technical support and web development',
    'about.teamLoraine': 'Loraine Gresseau, MSc',
    'about.teamLoraineRole': 'Scientific content lead',

    // Contact
    'contact.title': 'Contact us',
    'contact.namePlaceholder': 'Name',
    'contact.emailPlaceholder': 'Email',
    'contact.subjectPlaceholder': 'Subject',
    'contact.messagePlaceholder': 'Your message ...',
    'contact.send': 'Send',
    'contact.nameRequired': '* Name is required.',
    'contact.emailRequired': '* A valid email is required.',
    'contact.subjectRequired': '* Subject is required.',
    'contact.messageRequired': '* A message is required.',
    'contact.success': 'Your email was sent successfully!',
    'contact.error': 'An error occurred. Please try again.',
    'contact.toxicityError': 'Your message was detected as containing inappropriate language. Please rephrase your message.',
    'contact.toxicityScore': 'Toxicity score:',
    'contact.rateLimited': 'Please wait a minute before sending another message.',

    // Notes
    'notes.title': 'Our documents',

    // Document modal
    'modal.buy': 'Buy',
    'modal.availableSoon': 'Available soon',
    'modal.previousImage': 'Previous image',
    'modal.nextImage': 'Next image',
    'modal.enlargeImage': 'Enlarge image',
  },
};
