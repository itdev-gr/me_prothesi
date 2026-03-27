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

export const brandStorySections: BrandStorySectionData[] = [
  {
    sectionId: 'section-01',
    title: 'Τι είναι το «Με Πρόθεση»',
    image: '/images/pause-carousel/slide-1.png',
    imageLeft: true,
    bg: 'lavender',
    parts: [
      {
        type: 'p',
        text: 'Ένα δημιουργικό project γεννημένο από την αγάπη για τη συνειδητή ζωή. Δημιουργημένο από ψυχοθεραπεύτρια.',
      },
      { type: 'h3', text: 'Δεν είναι' },
      {
        type: 'ul',
        items: ['Brand με φράσεις.', 'Motivational προϊόν.', 'Διακοσμητικό ritual object.'],
      },
      { type: 'h3', text: 'Είναι' },
      {
        type: 'p',
        text: 'Δομημένες, μικρές ψυχοεκπαιδευτικές εμπειρίες σε μορφή τελετουργίας για την καθημερινότητα.',
      },
    ],
  },
  {
    sectionId: 'section-02',
    title: 'Η κεντρική ιδέα',
    image: '/images/pause-carousel/slide-2.png',
    imageLeft: false,
    bg: 'white',
    parts: [
      {
        type: 'p',
        text: 'Το Με Πρόθεση δημιουργεί μικρές, δομημένες στιγμές αυτοπαρατήρησης μέσα στην καθημερινότητα.',
      },
      { type: 'p', text: 'Δεν προσφέρει έτοιμες απαντήσεις. Προσφέρει χώρο.' },
      {
        type: 'p',
        text: 'Κάθε box είναι μια εσωστρεφής εμπειρία που συνδυάζει άσκηση, επίγνωση και τελετουργία, ώστε η αλλαγή να ξεκινά από μέσα με συνειδητή επιλογή, όχι με πίεση.',
      },
    ],
  },
  {
    sectionId: 'section-03',
    title: 'Box: Pause Mode',
    image: '/images/pause-carousel/slide-3.png',
    imageLeft: true,
    bg: 'lavender',
    parts: [
      {
        type: 'p',
        text: 'Μικρές παύσεις για πιο συνειδητή εργασία. Στην καθημερινή εργασία λειτουργούμε συχνά στον αυτόματο.',
      },
      {
        type: 'p',
        text: 'Το κερί λειτουργεί ως ritual anchor. Νευρολογικό σημείο έναρξης πριν από κάποια άσκηση. Όχι διακοσμητικό αντικείμενο.',
      },
      { type: 'h3', text: 'Περιεχόμενα' },
      {
        type: 'ul',
        items: [
          '4 Κάρτες Αφύπνισης',
          '10 Κάρτες Άσκησης (3 επίπεδα)',
          'Αυτοκόλλητο «PAUSE.» + «SLOW DOWN»',
          'Κερί (ritual anchor)',
          'Συνοδευτικός οδηγός χρήσης',
        ],
      },
    ],
  },
  {
    sectionId: 'section-04',
    title: 'Για ποιον είναι',
    image: '/images/pause-mode/box-01.png',
    imageLeft: false,
    bg: 'white',
    parts: [
      {
        type: 'p',
        text: 'Γυναίκες και άνδρες 28–45, σε φάση μετάβασης. Με ενδιαφέρον για προσωπική ανάπτυξη και κόπωση από το «θετικό thinking».',
      },
      { type: 'h3', text: 'Ψυχογραφικά' },
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
    sectionId: 'section-05',
    title: 'Και για εταιρείες',
    image: '/images/pause-mode/box-02.png',
    imageLeft: true,
    bg: 'lavender',
    parts: [
      {
        type: 'p',
        text: 'Structured Reflection Tools for Employee Wellbeing.',
      },
      { type: 'h3', text: 'Θεματικές' },
      {
        type: 'ul',
        items: [
          'Burnout Prevention',
          'Self-Leadership',
          'Emotional Literacy',
          'Boundary Setting',
        ],
      },
    ],
  },
  {
    sectionId: 'section-06',
    title: 'Μακροπρόθεσμο όραμα',
    image: '/images/pause-mode/box-03.png',
    imageLeft: false,
    bg: 'white',
    parts: [
      {
        type: 'p',
        text: 'Το Με Πρόθεση εξελίσσεται.',
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
  {
    sectionId: 'section-07',
    title: 'Τοποθέτηση στον χώρο',
    image: '/images/pause-mode/box-04.png',
    imageLeft: true,
    bg: 'lavender',
    parts: [
      {
        type: 'p',
        text: 'Δημιουργούμε μια κατηγορία που δεν είναι «motivation» ούτε «διακόσμηση γραφείου» — είναι δομημένη αντανάκλαση σε μορφή τελετουργίας.',
      },
      { type: 'h3', text: 'Σε μία πρόταση' },
      {
        type: 'p',
        text: '«Mini structured psychological interventions in ritual form» — μικρές, επαναλήψιμες παρεμβάσεις που χωράνε στην πραγματική μέρα.',
      },
      {
        type: 'p',
        text: 'Δεν ανταγωνιζόμαστε τα ημερολόγια θετικότητας· δίνουμε ρυθμό, όχι πίεση.',
      },
    ],
  },
  {
    sectionId: 'section-08',
    title: 'Πρώτο box: «Ξεκινάω»',
    image: '/images/pause-mode/box-05.png',
    imageLeft: false,
    bg: 'white',
    parts: [
      {
        type: 'p',
        text: 'Θεματική: δράση χωρίς τελειότητα. Στόχος να κινηθείς χωρίς να περιμένεις να νιώσεις «έτοιμος».',
      },
      { type: 'h3', text: 'Τι περιλαμβάνει' },
      {
        type: 'ul',
        items: [
          '3 κάρτες αφύπνησης',
          '6 κάρτες άσκησης',
          '2 αυτοκόλλητα: «Με Πρόθεση» / «Με Πρόθεση. Όχι με φόβο»',
          'Κερί με μήνυμα «Ξεκινάω»',
        ],
      },
    ],
  },
  {
    sectionId: 'section-09',
    title: 'Χαρακτήρας του brand',
    image: '/images/pause-mode/box-06.png',
    imageLeft: true,
    bg: 'lavender',
    parts: [
      {
        type: 'p',
        text: 'Ήσυχο, καθαρό, γήινο. Σοβαρό χωρίς βαρύτητα — σαν χώρος που σε αφήνει να αναπνεύσεις.',
      },
      { type: 'h3', text: 'Τρεις αρχές τόνου' },
      {
        type: 'ul',
        items: [
          'Δεν φωνάζει· δεν διεκδικεί την προσοχή με κραυγές.',
          'Δεν υπόσχεται μεταμόρφωση μιας νύχτας.',
          'Δεν πιέζει για απόλυτη θετικότητα· σέβεται την κούραση.',
        ],
      },
    ],
  },
  {
    sectionId: 'section-10',
    title: 'Οπτική ταυτότητα',
    image: '/images/pause-mode/box-07.png',
    imageLeft: false,
    bg: 'white',
    parts: [
      {
        type: 'p',
        text: 'Το λογότυπο ζωγραφίζει ένα ακανόνιστο, οργανικό περίγραμμα — σαν χειροποίητη γραμμή που σε ένα σημείο λεπταίνει και «ανοίγει».',
      },
      {
        type: 'p',
        text: 'Συμβολίζει διαδικασία, όχι τέλειο κύκλο· ζωντανό σύστημα που εξελίσσεται, όχι κλειστή φόρμα.',
      },
    ],
  },
  {
    sectionId: 'section-11',
    title: 'Tagline',
    image: '/images/pause-carousel/slide-2.png',
    imageLeft: true,
    bg: 'lavender',
    parts: [
      {
        type: 'p',
        text: 'Η αλλαγή ξεκινά Με Πρόθεση.',
      },
      {
        type: 'p',
        text: 'Μια πρόταση που δένει προϊόν, ρυθμό και εσωτερική επιλογή — χωρίς να υπόσχεται μαγικά.',
      },
    ],
  },
  {
    sectionId: 'section-12',
    title: 'Πώς συναντά το κοινό',
    image: '/images/pause-mode/box-08.png',
    imageLeft: false,
    bg: 'white',
    parts: [
      { type: 'h3', text: 'Φάση 1 — Εκπαίδευση κοινού' },
      {
        type: 'p',
        text: 'Έμφαση στο Instagram: μικρές προθέσεις εβδομάδας, micro reflections, υπενθυμίσεις ορίων. Στόχος να γνωρίσει το κοινό την πρόθεση ως πράξη, όχι ως σύνθημα.',
      },
      { type: 'h3', text: 'Φάση 2 — Limited drop' },
      {
        type: 'p',
        text: 'Περιορισμένη πρώτη συλλογή. Το μήνυμα: όχι ακόμα ένα προϊόν — μια εμπειρία που σέβεται τον ρυθμό σου.',
      },
    ],
  },
  {
    sectionId: 'section-13',
    title: 'Υπόσχεση & όρια',
    image: '/images/pause-mode/box-09.png',
    imageLeft: true,
    bg: 'lavender',
    parts: [
      {
        type: 'p',
        text: 'Το Με Πρόθεση είναι ψυχοεκπαιδευτικό εργαλείο αυτοπαρατήρησης· δεν αντικαθιστά ψυχοθεραπεία ή ιατρική φροντίδα.',
      },
      { type: 'h3', text: 'Δέσμευση' },
      {
        type: 'ul',
        items: [
          'Ειλικρινής γλώσσα, χωρίς υπερβολικές υποσχέσεις.',
          'Σεβασμός στον ρυθμό και τα όρια του ατόμου.',
          'Σαφής δομή — ώστε η παύση να είναι επιλογή, όχι τύψεις.',
        ],
      },
    ],
  },
];
