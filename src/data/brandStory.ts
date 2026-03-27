export type StoryPart =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] };

export type BrandStorySectionData = {
  sectionId: string;
  title: string;
  image: string;
  imageLeft: boolean;
  bg: 'lavender' | 'white';
  parts: StoryPart[];
};

const imgs = [
  '/images/pause-carousel/slide-1.png',
  '/images/pause-carousel/slide-2.png',
  '/images/pause-carousel/slide-3.png',
  '/images/pause-mode/box-01.png',
  '/images/pause-mode/box-02.png',
  '/images/pause-mode/box-03.png',
  '/images/pause-mode/box-04.png',
  '/images/pause-mode/box-05.png',
  '/images/pause-mode/box-06.png',
  '/images/pause-mode/box-07.png',
  '/images/pause-mode/box-08.png',
  '/images/pause-mode/box-09.png',
  '/images/pause-mode/box-10.png',
] as const;

export const brandStorySections: BrandStorySectionData[] = [
  {
    sectionId: 'ti-einai',
    title: 'Τι είναι το «Με Πρόθεση»',
    image: imgs[0],
    imageLeft: true,
    bg: 'lavender',
    parts: [
      {
        type: 'p',
        text: 'Το Με Πρόθεση είναι ένα δημιουργικό project που γεννήθηκε από την αγάπη για τη συνειδητή ζωή και δημιουργήθηκε από ψυχοθεραπεύτρια.',
      },
      { type: 'h3', text: 'ΔΕΝ ΕΙΝΑΙ:' },
      {
        type: 'ul',
        items: ['brand με φράσεις.', 'motivational προϊόν.', 'διακοσμητικό ritual object.'],
      },
      { type: 'h3', text: 'Είναι:' },
      {
        type: 'p',
        text: 'Δομημένες, μικρές ψυχοεκπαιδευτικές εμπειρίες σε μορφή τελετουργίας για την καθημερινότητα.',
      },
    ],
  },
  {
    sectionId: 'brand-2',
    title: 'Κεντρική ιδέα',
    image: imgs[1],
    imageLeft: false,
    bg: 'white',
    parts: [
      { type: 'p', text: 'Η αλλαγή δεν ξεκινά εξωτερικά. Ξεκινά εσωτερικά – Με Πρόθεση.' },
      { type: 'p', text: 'Η αλλαγή δεν έρχεται με φράσεις. Έρχεται με πρόθεση.' },
      { type: 'p', text: 'Το box δεν είναι challenge. Είναι μια μικρή συνάντηση με εσένα.' },
    ],
  },
  {
    sectionId: 'brand-3',
    title: 'Brand Statement',
    image: imgs[2],
    imageLeft: true,
    bg: 'lavender',
    parts: [
      {
        type: 'p',
        text: 'Το Με Πρόθεση δημιουργεί μικρές, δομημένες στιγμές αυτοπαρατήρησης μέσα στην καθημερινότητα.',
      },
      { type: 'p', text: 'Δεν προσφέρει έτοιμες απαντήσεις. Προσφέρει χώρο.' },
      {
        type: 'p',
        text: 'Κάθε box είναι μια εσωστρεφής εμπειρία που συνδυάζει:',
      },
      {
        type: 'ul',
        items: ['άσκηση', 'επίγνωση', 'τελετουργία'],
      },
      {
        type: 'p',
        text: 'ώστε η αλλαγή να ξεκινά από μέσα – με συνειδητή επιλογή, όχι με πίεση.',
      },
      { type: 'p', text: 'Δεν αντικαθιστά την ψυχοθεραπεία.' },
      { type: 'p', text: 'Είναι ψυχοεκπαιδευτικό εργαλείο αυτοπαρατήρησης.' },
    ],
  },
  {
    sectionId: 'brand-4',
    title: 'Brand Positioning',
    image: imgs[3],
    imageLeft: false,
    bg: 'white',
    parts: [
      { type: 'h3', text: 'Κατηγορία που δημιουργούμε:' },
      {
        type: 'p',
        text: '«Mini structured psychological interventions in ritual form»',
      },
      {
        type: 'p',
        text: 'Είμαστε: Structured reflection tools για καθημερινή συνειδητή αλλαγή.',
      },
    ],
  },
  {
    sectionId: 'brand-5',
    title: 'Προϊόν – Δομή Experience',
    image: imgs[4],
    imageLeft: true,
    bg: 'lavender',
    parts: [
      { type: 'h3', text: 'Μορφή:' },
      {
        type: 'p',
        text: 'Κάρτες αφύπνησης για κάθε περίπτωση και αντίστοιχα θεματικά αυτοκόλλητα. Θεματικά boxes με δομημένη εμπειρία 7 ή 10 ημερών.',
      },
      { type: 'h3', text: 'Κάθε box περιλαμβάνει:' },
      {
        type: 'ul',
        items: [
          'Κάρτες αφύπνησης (awareness triggers)',
          'Κάρτες άσκησης (structured micro interventions)',
          'Ritual anchor (κερί)',
          'Συνοδευτικό οδηγό χρήσης',
          'Μικρά συμβολικά στοιχεία (π.χ. αυτοκόλλητα με πρόθεση)',
        ],
      },
      { type: 'h3', text: 'Το κερί λειτουργεί ως:' },
      {
        type: 'ul',
        items: [
          '→ ritual anchor',
          '→ νευρολογικό σημείο έναρξης',
          '→ όχι διακοσμητικό αντικείμενο',
        ],
      },
    ],
  },
  {
    sectionId: 'brand-6',
    title: 'Πρώτο Box: «Ξεκινάω»',
    image: imgs[5],
    imageLeft: false,
    bg: 'white',
    parts: [
      { type: 'h3', text: 'Θεματική:' },
      { type: 'p', text: 'Δράση χωρίς τελειότητα.' },
      { type: 'h3', text: 'Στόχος:' },
      {
        type: 'p',
        text: 'Να βοηθήσει το άτομο να κινηθεί χωρίς να περιμένει να νιώσει έτοιμο.',
      },
      { type: 'h3', text: 'Περιεχόμενο:' },
      {
        type: 'ul',
        items: [
          '3 κάρτες αφύπνησης',
          '6 κάρτες άσκησης',
          '2 αυτοκόλλητα: «Με Πρόθεση» / «Με Πρόθεση. Όχι με Φόβο»',
          'Κερί με μήνυμα «Ξεκινάω»',
        ],
      },
    ],
  },
  {
    sectionId: 'brand-7',
    title: 'Target Audience',
    image: imgs[6],
    imageLeft: true,
    bg: 'lavender',
    parts: [
      { type: 'h3', text: 'Primary:' },
      {
        type: 'p',
        text: 'Γυναίκες & άνδρες 28–45 σε φάση μετάβασης, με ενδιαφέρον για προσωπική ανάπτυξη, με κόπωση από το «θετικό thinking» που θέλουν δομή, όχι απλά έμπνευση.',
      },
      { type: 'h3', text: 'Ψυχογραφικά:' },
      {
        type: 'ul',
        items: [
          'Αναζητούν εσωτερική καθαρότητα',
          'Έχουν επίγνωση αλλά δυσκολεύονται στη δράση',
          'Θέλουν μικρές, ρεαλιστικές παρεμβάσεις',
        ],
      },
    ],
  },
  {
    sectionId: 'brand-8',
    title: 'Corporate Extension',
    image: imgs[7],
    imageLeft: false,
    bg: 'white',
    parts: [
      {
        type: 'p',
        text: 'Το Με Πρόθεση μπορεί να εξελιχθεί σε: Structured Reflection Tools for Employee Wellbeing',
      },
      { type: 'h3', text: 'Θεματικές:' },
      {
        type: 'ul',
        items: [
          'Burnout Prevention',
          'Self-Leadership',
          'Emotional Literacy',
          'Boundary Setting',
        ],
      },
      { type: 'h3', text: 'Χρήση:' },
      {
        type: 'ul',
        items: ['Focus sessions', 'Transition rituals', 'Team reflection tools'],
      },
    ],
  },
  {
    sectionId: 'brand-9',
    title: 'Brand Personality',
    image: imgs[8],
    imageLeft: true,
    bg: 'lavender',
    parts: [
      {
        type: 'ul',
        items: [
          'Ήσυχο, Καθαρό, Σοβαρό αλλά όχι βαρύ, Γήινο, Στοχαστικό, Δομημένο',
          'Δεν φωνάζει.',
          'Δεν υπόσχεται μεταμόρφωση.',
          'Δεν πιέζει.',
        ],
      },
    ],
  },
  {
    sectionId: 'brand-10',
    title: 'Οπτική ταυτότητα',
    image: imgs[9],
    imageLeft: false,
    bg: 'white',
    parts: [
      { type: 'h3', text: 'Logo Concept:' },
      {
        type: 'p',
        text: 'Ένα ακανόνιστο, οργανικό περίγραμμα, σαν χειροποίητη γραμμή. Σε ένα σημείο λεπταίνει και δημιουργεί άνοιγμα.',
      },
      {
        type: 'p',
        text: 'Συμβολίζει: Όχι τέλειος κύκλος αλλά ζωντανό σύστημα. Διαδικασία, όχι τελειότητα.',
      },
    ],
  },
  {
    sectionId: 'brand-11',
    title: 'Tagline',
    image: imgs[10],
    imageLeft: true,
    bg: 'lavender',
    parts: [{ type: 'p', text: 'Η αλλαγή ξεκινάει Με Πρόθεση.' }],
  },
  {
    sectionId: 'brand-12',
    title: '12. Go-to-Market Strategy',
    image: imgs[11],
    imageLeft: false,
    bg: 'white',
    parts: [
      { type: 'h3', text: 'Φάση 1 – Εκπαίδευση κοινού (2 μήνες)' },
      { type: 'p', text: 'Instagram-only strategy:' },
      {
        type: 'ul',
        items: [
          'Μικρές προθέσεις εβδομάδας',
          'Micro reflections',
          'Υπενθύμιση ορίων',
          'Polls για έρευνα',
        ],
      },
      {
        type: 'p',
        text: 'Στόχος: Να εκπαιδευτεί το κοινό στην έννοια της πρόθεσης ως πράξη.',
      },
      { type: 'h3', text: 'Φάση 2 – Limited Drop' },
      { type: 'p', text: 'Πρώτη συλλογή σε περιορισμένο αριθμό.' },
      {
        type: 'p',
        text: 'Το positioning: Όχι προϊόν. Εμπειρία.',
      },
    ],
  },
  {
    sectionId: 'brand-13',
    title: 'Μακροπρόθεσμο όραμα',
    image: imgs[12],
    imageLeft: true,
    bg: 'lavender',
    parts: [
      {
        type: 'p',
        text: 'Το Με Πρόθεση μπορεί να εξελιχθεί σε:',
      },
      {
        type: 'ul',
        items: [
          'Θεματική σειρά boxes',
          'Corporate wellbeing toolkits',
          'Workshops',
        ],
      },
    ],
  },
];
