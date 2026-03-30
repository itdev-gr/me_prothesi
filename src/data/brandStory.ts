export type StoryPart =
  | { type: 'p'; text: string; emphasis?: boolean }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] };

/** Ειδικό εσωτερικό layout (π.χ. Μακροπρόθεσμο Όραμα: 1 συμπαγές + 2 δίπλα-δίπλα) */
export type BrandStoryCardLayout = 'stack-3-bullets';

export type BrandStorySectionData = {
  sectionId: string;
  title: string;
  image: string;
  imageLeft: boolean;
  bg: 'lavender' | 'white';
  parts: StoryPart[];
  layout?: BrandStoryCardLayout;
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
        text: 'Η αλλαγή δεν ξεκινά εξωτερικά. Ξεκινά εσωτερικά – Με Πρόθεση.',
      },
      {
        type: 'p',
        text: 'Η αλλαγή δεν έρχεται με φράσεις. Έρχεται με πρόθεση.',
      },
      {
        type: 'p',
        text: 'Το box δεν είναι challenge. Είναι μια μικρή συνάντηση με εσένα.',
      },
    ],
  },
  {
    sectionId: 'section-03',
    title: 'Brand Statement',
    image: '/images/pause-carousel/slide-3.png',
    imageLeft: true,
    bg: 'lavender',
    parts: [
      {
        type: 'p',
        text: 'Το Με Πρόθεση δημιουργεί μικρές, δομημένες στιγμές αυτοπαρατήρησης μέσα στην καθημερινότητα.',
      },
      {
        type: 'p',
        text: 'Δεν προσφέρει έτοιμες απαντήσεις. Προσφέρει χώρο.',
      },
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
      {
        type: 'p',
        text: 'Δεν αντικαθιστά την ψυχοθεραπεία.',
        emphasis: true,
      },
      {
        type: 'p',
        text: 'Είναι ψυχοεκπαιδευτικό εργαλείο αυτοπαρατήρησης.',
      },
    ],
  },
  {
    sectionId: 'section-04',
    title: 'Brand Positioning',
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
      {
        type: 'p',
        text: 'Κατηγορία που δημιουργούμε:',
      },
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
    sectionId: 'section-05',
    title: 'Προϊόν – Δομή Experience',
    image: '/images/pause-mode/box-02.png',
    imageLeft: true,
    bg: 'lavender',
    parts: [
      { type: 'h3', text: 'Μορφή' },
      {
        type: 'p',
        text: 'Κάρτες αφύπνησης για κάθε περίπτωση και αντίστοιχα θεματικά αυτοκόλλητα.',
      },
      {
        type: 'p',
        text: 'Θεματικά boxes με δομημένη εμπειρία 7 ή 10 ημερών.',
      },
      {
        type: 'p',
        text: 'Κάθε box περιλαμβάνει:',
      },
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
      {
        type: 'p',
        text: 'Το κερί λειτουργεί ως:',
      },
      {
        type: 'ul',
        items: [
          'ritual anchor',
          'νευρολογικό σημείο έναρξης',
          'όχι διακοσμητικό αντικείμενο',
        ],
      },
    ],
  },
  {
    sectionId: 'section-06',
    title: 'Πρώτο Box: «Ξεκινάω»',
    image: '/images/pause-mode/box-03.png',
    imageLeft: false,
    bg: 'white',
    parts: [
      {
        type: 'p',
        text: 'Θεματική: Δράση χωρίς τελειότητα.',
      },
      {
        type: 'p',
        text: 'Στόχος: Να βοηθήσει το άτομο να κινηθεί χωρίς να περιμένει να νιώσει έτοιμο.',
      },
      {
        type: 'p',
        text: 'Περιεχόμενο:',
      },
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
    sectionId: 'section-07',
    title: 'Target Audience',
    image: '/images/pause-mode/box-04.png',
    imageLeft: true,
    bg: 'lavender',
    parts: [
      {
        type: 'p',
        text: 'Primary: Γυναίκες & άνδρες 28–45, σε φάση μετάβασης, με ενδιαφέρον για προσωπική ανάπτυξη, με κόπωση από το «θετικό thinking» που θέλουν δομή, όχι απλά έμπνευση.',
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
    sectionId: 'section-08',
    title: 'Corporate Extension',
    image: '/images/pause-mode/box-05.png',
    imageLeft: false,
    bg: 'white',
    parts: [
      {
        type: 'p',
        text: 'Το Με Πρόθεση μπορεί να εξελιχθεί σε:',
      },
      {
        type: 'p',
        text: 'Structured Reflection Tools for Employee Wellbeing',
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
      { type: 'h3', text: 'Χρήση' },
      {
        type: 'ul',
        items: [
          'Focus sessions',
          'Transition rituals',
          'Team reflection tools',
        ],
      },
    ],
  },
  {
    sectionId: 'section-09',
    title: 'Brand Personality',
    image: '/images/pause-mode/box-06.png',
    imageLeft: true,
    bg: 'lavender',
    parts: [
      {
        type: 'ul',
        items: [
          'Ήσυχο, Καθαρό, Σοβαρό αλλά όχι βαρύ, Γήινο, Στοχαστικό, Δομημένο',
          'Δεν φωνάζει.',
          'Δεν υπόσχεται μεταμόρφωση.',
          'Δεν πιέζει',
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
    title: 'Η αλλαγή ξεκινά Με Πρόθεση.',
    image: '/images/pause-carousel/slide-2.png',
    imageLeft: true,
    bg: 'lavender',
    parts: [
      {
        type: 'p',
        text: 'Μια πρόταση που δένει προϊόν, ρυθμό και εσωτερική επιλογή — χωρίς να υπόσχεται μαγικά.',
      },
    ],
  },
  {
    sectionId: 'section-12',
    title: 'Go-to-Market Strategy',
    image: '/images/pause-mode/box-08.png',
    imageLeft: false,
    bg: 'white',
    parts: [
      { type: 'h3', text: 'Φάση 1 – Εκπαίδευση Κοινού (2 μήνες)' },
      {
        type: 'p',
        text: 'Instagram-only strategy:',
      },
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
        text: 'Στόχος:',
      },
      {
        type: 'p',
        text: 'Να εκπαιδευτεί το κοινό στην έννοια της πρόθεσης ως πράξη.',
      },
      { type: 'h3', text: 'Φάση 2 – Limited Drop' },
      {
        type: 'p',
        text: 'Πρώτη συλλογή σε περιορισμένο αριθμό.',
      },
      {
        type: 'p',
        text: 'Το positioning:',
      },
      {
        type: 'p',
        text: 'Όχι προϊόν.',
      },
      {
        type: 'p',
        text: 'Εμπειρία.',
      },
    ],
  },
  {
    sectionId: 'section-13',
    title: 'Μακροπρόθεσμο Όραμα',
    image: '/images/pause-mode/box-09.png',
    imageLeft: true,
    bg: 'lavender',
    layout: 'stack-3-bullets',
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

/** Κεφάλαια brand story: ομαδοποίηση καρτών + τίτλος/εισαγωγή για καθαρή ροή ανά μέρος. */
export type BrandStoryChapterData = {
  chapterId: string;
  label: string;
  title: string;
  intro: string;
  sections: BrandStorySectionData[];
};

const BRAND_STORY_CHAPTER_CONFIG: readonly {
  readonly chapterId: string;
  readonly title: string;
  readonly intro: string;
  readonly sectionIds: readonly string[];
}[] = [
  {
    chapterId: 'brand-chapter-core',
    title: 'Θεμέλια & προϊόν',
    intro:
      'Ο ορισμός του «Με Πρόθεση», η κεντρική ιδέα, το brand statement, το positioning και η δομή του experience — όσα καθορίζουν την ουσία και τη μορφή του project.',
    sectionIds: [
      'section-01',
      'section-02',
      'section-03',
      'section-04',
      'section-05',
    ],
  },
  {
    chapterId: 'brand-chapter-audience',
    title: 'Ακροατήριο & χαρακτήρας',
    intro:
      'Από το πρώτο box και το target audience, μέχρι την corporate επέκταση και την προσωπικότητα της φωνής — ποιους αγγίζουμε και πώς ακούγεται το brand.',
    sectionIds: ['section-06', 'section-07', 'section-08', 'section-09'],
  },
  {
    chapterId: 'brand-chapter-market-vision',
    title: 'Αγορά, όραμα & ταυτότητα',
    intro:
      'Η στρατηγική go-to-market, το μακροπρόθεσμο όραμα, η οπτική ταυτότητα και το tagline — από την πρώτη επαφή με το κοινό έως την εικόνα και το μήνυμα του brand.',
    sectionIds: [
      'section-12',
      'section-13',
      'section-10',
      'section-11',
    ],
  },
];

export function getBrandStoryChapters(): BrandStoryChapterData[] {
  const byId = new Map(brandStorySections.map((s) => [s.sectionId, s]));
  return BRAND_STORY_CHAPTER_CONFIG.map((ch, index) => ({
    chapterId: ch.chapterId,
    label: String(index + 1).padStart(2, '0'),
    title: ch.title,
    intro: ch.intro,
    sections: ch.sectionIds.map((id) => {
      const s = byId.get(id);
      if (!s) throw new Error(`Missing brand story section: ${id}`);
      return s;
    }),
  }));
}
