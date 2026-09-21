const questionBank = {
    maths: {
        label: "Maths",
        topics: {
            "Differentiation": {
                flashcards: [
                    { front: "What is the derivative of x^n?", back: "n·x^(n-1)" },
                    { front: "What does dy/dx represent?", back: "The rate of change of y with respect to x (the gradient of the curve)" },
                    { front: "Derivative of sin(x)?", back: "cos(x)" },
                ],
                quiz: [
                    {
                        prompt: "What is the derivative of x^3?",
                        options: ["3x^2", "x^2", "3x", "x^4/4"],
                        correct: 0,
                    },
                    {
                        prompt: "At a stationary point, dy/dx equals:",
                        options: ["1", "0", "Undefined", "-1"],
                        correct: 1,
                    },
                ],
            },
        },
    },

    physics: {
        label: "Physics",
        topics: {
            "Forces & Motion": {
                flashcards: [
                    { front: "Newton's Second Law formula", back: "F = ma" },
                    { front: "Unit of force", back: "Newton (N)" },
                    { front: "Formula for kinetic energy", back: "Ek = ½mv²" },
                ],
                quiz: [
                    {
                        prompt: "What is the SI unit of momentum?",
                        options: ["kg·m/s", "N", "J", "W"],
                        correct: 0,
                    },
                    {
                        prompt: "An object in equilibrium has a resultant force of:",
                        options: ["Maximum", "Zero", "Constant but non-zero", "Undefined"],
                        correct: 1,
                    },
                ],
            },
        },
    },

    biology: {
        label: "Biology",
        topics: {
            "Cell Biology": {
                flashcards: [
                    { front: "What is the function of mitochondria?", back: "Site of aerobic respiration — produces ATP" },
                    { front: "What is osmosis?", back: "Movement of water across a partially permeable membrane from high to low water concentration" },
                    { front: "Role of the Golgi apparatus", back: "Modifies, packages, and ships proteins from the ER" },
                ],
                quiz: [
                    {
                        prompt: "Which organelle contains chlorophyll?",
                        options: ["Mitochondria", "Nucleus", "Chloroplast", "Ribosome"],
                        correct: 2,
                    },
                    {
                        prompt: "Active transport requires:",
                        options: ["No energy", "ATP", "Osmosis only", "Diffusion gradient"],
                        correct: 1,
                    },
                ],
            },
        },
    },

    chemistry: {
        label: "Chemistry",
        topics: {
            "Bonding": {
                flashcards: [
                    { front: "What is an ionic bond?", back: "Electrostatic attraction between oppositely charged ions" },
                    { front: "What is a covalent bond?", back: "A shared pair of electrons between two atoms" },
                    { front: "Why do metals conduct electricity?", back: "Delocalised electrons free to move through the metallic lattice" },
                ],
                quiz: [
                    {
                        prompt: "Which bond type involves a 'sea of electrons'?",
                        options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
                        correct: 2,
                    },
                    {
                        prompt: "A polar covalent bond forms due to a difference in:",
                        options: ["Mass", "Electronegativity", "Volume", "Density"],
                        correct: 1,
                    },
                ],
            },
        },
    },

    engineering: {
        label: "Engineering Science",
        topics: {
            "Mechanisms": {
                flashcards: [
                    { front: "What does a gear train do?", back: "Transmits rotational motion and torque between shafts, changing speed/direction" },
                    { front: "Formula for mechanical advantage", back: "MA = load / effort" },
                    { front: "What is torque?", back: "A turning force = force × perpendicular distance from pivot" },
                ],
                quiz: [
                    {
                        prompt: "Increasing gear ratio typically increases:",
                        options: ["Speed", "Torque", "Both equally", "Neither"],
                        correct: 1,
                    },
                    {
                        prompt: "Efficiency of a machine is calculated as:",
                        options: ["Output/Input × 100", "Input/Output × 100", "Output - Input", "Input + Output"],
                        correct: 0,
                    },
                ],
            },
        },
    },

    modernStudies: {
        label: "Modern Studies",
        topics: {
            "Democracy in Scotland/UK": {
                flashcards: [
                    { front: "What is a constituency?", back: "A geographic area represented by one elected MP/MSP" },
                    { front: "What voting system is used for Holyrood?", back: "Additional Member System (AMS)" },
                    { front: "What is pressure group?", back: "An organised group that seeks to influence government policy without seeking election" },
                ],
                quiz: [
                    {
                        prompt: "Westminster elections use which voting system?",
                        options: ["First Past the Post", "AMS", "STV", "Proportional Representation"],
                        correct: 0,
                    },
                    {
                        prompt: "Which of these is an insider pressure group tactic?",
                        options: ["Public protest", "Direct lobbying of ministers", "Media boycotts", "Strikes"],
                        correct: 1,
                    },
                ],
            },
        },
    },

    english: {
        label: "English",
        topics: {
            "Critical Essay Terms": {
                flashcards: [
                    { front: "What is a 'motif'?", back: "A recurring image, idea, or symbol that develops a theme" },
                    { front: "What does 'juxtaposition' mean?", back: "Placing two contrasting ideas/images close together for effect" },
                    { front: "What is 'pathetic fallacy'?", back: "Attributing human emotion to nature/weather to reflect mood" },
                ],
                quiz: [
                    {
                        prompt: "A 'volta' in a poem refers to:",
                        options: ["A rhyme scheme", "A turn/shift in argument or tone", "A type of metaphor", "The poem's title"],
                        correct: 1,
                    },
                    {
                        prompt: "Which technique repeats a consonant sound?",
                        options: ["Assonance", "Alliteration", "Enjambment", "Caesura"],
                        correct: 1,
                    },
                ],
            },
        },
    },

    computerScience: {
        label: "Computer Science",
        topics: {
            "Data Structures": {
                flashcards: [
                    { front: "What is a stack?", back: "LIFO data structure — last in, first out" },
                    { front: "What is a queue?", back: "FIFO data structure — first in, first out" },
                    { front: "Time complexity of binary search?", back: "O(log n)" },
                ],
                quiz: [
                    {
                        prompt: "Which structure uses push/pop operations?",
                        options: ["Queue", "Stack", "Linked list", "Array only"],
                        correct: 1,
                    },
                    {
                        prompt: "Big O of a linear search in the worst case:",
                        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
                        correct: 2,
                    },
                ],
            },
        },
    },
};