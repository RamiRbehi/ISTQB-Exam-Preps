import { list } from "postcss";

export const sampleExamA = {
  id: "exam-a",
  title: {
    en: "Sample Exam A",
    fr: "Examen A d'exemple"
  },
  timeLimit: 30, // time in minutes
  questions: [
    {
      id: "q1",
      number: 1,
      text: {
        en: "Which of the following statements describe a valid test objective?",
        fr: "Lequel des énoncés suivants décrit un objectif de test valide?"
      },
      options: [
        {
          id: "a",
          text: { en: "To prove that there are no unfixed defects in the system under test", 
                fr: "Prouver qu'il n'y a pas de défauts non corrigés dans le système testé" }
        },
        {
          id: "b",
          text: { en: "To prove that there will be no failures after the implementation of the system into production", 
                  fr: "Prouver qu'il n'y aura aucune défaillance après la mise en œuvre du système en production" }
        },
        {
          id: "c",
          text: { en: "To reduce the risk level of the test object and to build confidence in the quality level", 
                  fr: "Réduire le niveau de risque de l'objet de test et renforcer la confiance dans le niveau de qualité" }
        },
        {
          id: "d",
          text: { en: "To verify that there are no untested combinations of inputs", 
                  fr: "Pour vérifier qu'il n'existe pas de combinaisons d'entrées non testées" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "q2",
      number: 2,
      text: {
        en: "Which of the following options shows an example of test activities that contribute to success?",
        fr: "Laquelle des options suivantes illustre un exemple d'activités de test qui contribuent à la réussite ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products", 
                fr: "L'implication des testeurs dans diverses activités du cycle de vie du développement logiciel (SDLC) permettra de détecter les défauts dans les produits de travail." }
        },
        {
          id: "b",
          text: { en: "Testers try not to disturb the developers while coding, so that the developers write better code", 
                  fr: "Les testeurs essaient de ne pas déranger les développeurs pendant le codage afin qu'ils écrivent un meilleur code." }
        },
        {
          id: "c",
          text: { en: "Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing", 
                  fr: "La collaboration des testeurs avec les utilisateurs finaux permet d'améliorer la qualité des rapports de défauts lors de l'intégration des composants et des tests système." }
        },
        {
          id: "d",
          text: { en: "Certified testers will design much better test cases than non-certified testers", 
                  fr: "Les testeurs certifiés concevront des cas de test bien meilleurs que les testeurs non certifiés." }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "q3",
      number: 3,
      text: {
        en: "You have been assigned as a tester to a team producing a new system incrementally. You have noticed that no changes have been made to the existing regression test cases for several iterations and no new regression defects were identified. Your manager is happy, but you are not. Which testing principle explains your skepticism?",
        fr: "En tant que testeur, vous êtes assigné à une équipe produisant un nouveau système par incréments. Vous avez remarqué qu'aucun changement n'a été apporté aux cas de test de régression existants depuis plusieurs itérations et qu'aucun nouveau défaut de régression n'a été identifié. Votre responsable est satisfait, mais pas vous. Quel principe de test explique votre scepticisme ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Tests wear out", 
                fr: "L'usure des tests" }
        },
        {
          id: "b",
          text: { en: "Absence-of-errors fallacy", 
                  fr: "L'illusion de l'absence de défaut" }
        },
        {
          id: "c",
          text: { en: "Defects cluster together", 
                  fr: "Le regroupement des défauts" }
        },
        {
          id: "d",
          text: { en: "Exhaustive testing is impossible", 
                  fr: "Le test exhaustif est impossible" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "q4",
      number: 4,
      text: {
        en: "You work in a team that develops a mobile application for food ordering. In the current iteration the team decided to implement the payment functionality. Which of the following activities is a part of test analysis?",
        fr: "Vous travaillez dans une équipe qui développe une application mobile de commande de nourriture. Dans l'itération actuelle, l'équipe a décidé d'implémenter la fonctionnalité de paiement. Laquelle des activités suivantes fait partie de l'analyse de test ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Estimating that testing the integration with the payment service will take 8 person-days", 
                fr: "Estimer que le test de l'intégration avec le service de paiement prendra 8 jours-personne" }
        },
        {
          id: "b",
          text: { en: "Deciding that the team should test if it is possible to properly share payment between many users", 
                  fr: "Décider si l'équipe doit tester la possibilité de partager correctement le paiement entre plusieurs utilisateurs" }
        },
        {
          id: "c",
          text: { en: "Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid", 
                  fr: "Utiliser l'analyse des valeurs limites (BVA) pour dériver les données de test pour les cas de test qui vérifient le traitement correct du paiement pour le montant minimum autorisé" }
        },
        {
          id: "d",
          text: { en: "Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect", 
                  fr: "Analyser l'écart entre le résultat réel et le résultat attendu après l'exécution d'un cas de test qui vérifie le processus de paiement par carte de crédit, et signaler un défaut" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "q5",
      number: 5,
      text: {
        en: "Which of the following factors have a SIGNIFICANT influence on the test approach?",
        fr: "Lesquels des facteurs suivants (i à v) ont une influence SIGNIFICATIVE sur le processus de test ?",
      },
      romanList: {
        en: ["The SDLC", "The number of defects detected in previous projects", "The identified product risks", "New regulatory requirements forcing formal white-box testing", "The test environment setup"],
        fr: ["Le cycle de vie du développement logiciel (SDLC)", "Le nombre de défauts détectés dans les projets précédents", "Les risques identifiés du produit", "Nouvelles exigences réglementaires imposant des tests statiques formels", "La configuration de l'environnement de test"]
      },
      options: [
        {
          id: "a",
          text: { en: "i, ii have significant influence", 
                fr: "i et ii ont une influence significative" }
        },
        {
          id: "b",
          text: { en: "i, iii, iv have significant influence", 
                  fr: "i, iii et iv ont une influence significative" }
        },
        {
          id: "c",
          text: { en: "ii, iv, v have significant influence", 
                  fr: "ii, iv et v ont une influence significative" }
        },
        {
          id: "d",
          text: { en: "iii, v have significant influence", 
                  fr: "iii et v ont une influence significative" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "q6",
      number: 6,
      text: {
        en: "Which TWO of the following tasks belong MAINLY to a testing role?",
        fr: "Laquelle des DEUX tâches suivantes appartient PRINCIPALEMENT à un rôle de testeur ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Configure test environments", 
                fr: "Configurer les environnements de test" }
        },
        {
          id: "b",
          text: { en: "Maintain the product backlog", 
                  fr: "Maintenir le backlog produit" }
        },
        {
          id: "c",
          text: { en: "Design solutions to new requirements", 
                  fr: "Concevoir des solutions aux nouvelles exigences" }
        },
        {
          id: "d",
          text: { en: "Create the test plan", 
                  fr: "Créer le plan de test" }
        },
        {
          id: "e",
          text: { en: "Analyze the test basis", 
                  fr: "Analyser la base de test" }
        }
      ],
      correctAnswers: ["a", "e"],
      multipleAnswers: true
    },
    {
      id: "q7",
      number: 7,
      text: {
        en: "Which of the following skills (i-v) are the MOST important skills of a tester?",
        fr: "Laquelle des compétences suivantes (i à v) est la PLUS IMPORTANTE pour un testeur ?",
      },
      romanList: {
        en: ["Having domain knowledge.", "Creating a product vision.", "Being a good team player.", "Planning and organizing the work of the team", "Critical thinking"],
        fr: ["Avoir une connaissance du domaine.", "Créer une vision du produit.", "Être un bon joueur d'équipe.", "Planifier et organiser le travail de l'équipe.", "Esprit critique"]
      },
      options: [
        {
          id: "a",
          text: { en: "ii and iv are important", 
                fr: "ii et iv sont importantes" }
        },
        {
          id: "b",
          text: { en: "i, iii and v are important", 
                  fr: "i, iii et v sont importantes" }
        },
        {
          id: "c",
          text: { en: "i, ii and v are important", 
                  fr: "i, ii et v sont importantes" }
        },
        {
          id: "d",
          text: { en: "iii and iv are important", 
                  fr: "iii et iv sont importantes" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "q8",
      number: 8,
      text: {
        en: "How is the whole team approach present in the interactions between testers and business representatives?",
        fr: "Comment l'approche d'équipe entière se manifeste-t-elle dans les interactions entre les testeurs et les représentants d'affaires ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Business representatives decide on test automation approaches", 
                fr: "Les représentants d'affaires décident des approches d'automatisation des tests." }
        },
        {
          id: "b",
          text: { en: "Testers help business representatives to define test strategy", 
                  fr: "Les testeurs aident les représentants d'affaires à définir la stratégie de test." }
        },
        {
          id: "c",
          text: { en: "Business representatives are not part of the whole team approach", 
                  fr: "Les représentants d'affaires ne font pas partie de l'approche d'équipe entière." }
        },
        {
          id: "d",
          text: { en: "Testers help business representatives to create suitable acceptance tests", 
                  fr: "Les testeurs aident les représentants d'affaires à créer des tests d'acceptation appropriés." }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "q9",
      number: 9,
      text: {
        en: "Consider the following rule: “for every SDLC activity there is a corresponding test activity”. In which SDLC models does this rule hold?",
        fr: "Considérez la règle suivante : « pour chaque activité SDLC, il existe une activité de test correspondante ». Dans quels modèles SDLC cette règle est-elle valable ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Only in sequential SDLC models", 
                fr: "Uniquement dans les modèles SDLC séquentiels" }
        },
        {
          id: "b",
          text: { en: "Only in iterative SDLC models", 
                  fr: "Uniquement dans les modèles SDLC itératifs" }
        },
        {
          id: "c",
          text: { en: "Only in iterative and incremental SDLC models", 
                  fr: "Uniquement dans les modèles SDLC itératifs et incrémentiels" }
        },
        {
          id: "d",
          text: { en: "In sequential, incremental, and iterative SDLC models", 
                  fr: "Dans les modèles SDLC séquentiels, incrémentiels et itératifs" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "q10",
      number: 10,
      text: {
        en: "Which of the following statements BEST describes the acceptance test-driven development (ATDD) approach?",
        fr: "Laquelle des affirmations suivantes décrit le mieux l'approche de développement piloté par les tests d'acceptation (ATDD) ?",
      },
      options: [
        {
          id: "a",
          text: { en: "In ATDD, acceptance criteria are typically created based on the given/when/then format", 
                fr: "Dans l'ATDD, les critères d'acceptation sont généralement créés en suivant le format donné/quand/alors." }
        },
        {
          id: "b",
          text: { en: "In ATDD, test cases are mainly created at component testing and are code-oriented", 
                  fr: "Dans l'ATDD, les cas de test sont principalement créés lors des tests unitaires et sont orientés code." }
        },
        {
          id: "c",
          text: { en: "In ATDD, tests are created, based on acceptance criteria to drive the development of the related software", 
                  fr: "Dans l'ATDD, les tests sont créés à partir des critères d'acceptation pour piloter le développement du logiciel associé." }
        },
        {
          id: "d",
          text: { en: "in ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them", 
                  fr: "Dans l'ATDD, les tests sont basés sur le comportement souhaité du logiciel, ce qui les rend plus faciles à comprendre pour les membres de l'équipe." }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "q11",
      number: 11,
      text: {
        en: "Which of the following is NOT an example of the shift left approach?",
        fr: "Laquelle des situations suivantes NE correspond PAS à une approche de type « shift left » ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Reviewing the user requirements before they are formally accepted by the stakeholders", 
                fr: "Examiner les exigences des utilisateurs avant qu'elles ne soient officiellement acceptées par les parties prenantes" }
        },
        {
          id: "b",
          text: { en: "Writing a component test before the corresponding code is written", 
                  fr: "Écrire un test unitaire avant que le code correspondant ne soit écrit" }
        },
        {
          id: "c",
          text: { en: "Executing a performance efficiency test for a component during component testing", 
                  fr: "Exécuter un test d'efficacité des performances d'un composant pendant le test du composant" }
        },
        {
          id: "d",
          text: { en: "Writing a test script before setting up the configuration management process", 
                  fr: "Rédiger un script de test avant de mettre en place le processus de gestion de configuration" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "q12",
      number: 12,
      text: {
        en: "Which of the arguments below would you use to convince your manager to organize retrospectives at the end of each release cycle?",
        fr: "Vous souhaitez convaincre votre responsable d'organiser des rétrospectives à la fin de chaque cycle de livraison. Lequel des arguments suivants utiliseriez-vous ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Retrospectives are very popular these days and clients would appreciate it if we added them to our processes", 
                fr: "Les rétrospectives sont très populaires de nos jours et les clients apprécieraient que nous les ajoutions à nos processus." }
        },
        {
          id: "b",
          text: { en: "Organizing retrospectives will save the organization money because without them end user representatives do not provide immediate feedback about the product", 
                  fr: "L'organisation de rétrospectives permettra à l'organisation d'économiser de l'argent car, sans elles, les représentants des utilisateurs finaux ne fournissent pas de feedback immédiat sur le produit." }
        },
        {
          id: "c",
          text: { en: "Process weaknesses identified during the retrospective can be analyzed and serve as a to do list for the organization's continuous process improvement program", 
                  fr: "Les points faibles du processus identifiés lors de la rétrospective peuvent être analysés et servir de liste de tâches pour le programme d'amélioration continue des processus de l'organisation." }
        },
        {
          id: "d",
          text: { en: "Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization", 
                  fr: "Les rétrospectives adoptent cinq valeurs, dont le courage et le respect, qui sont cruciales pour maintenir l'amélioration continue au sein de l'organisation." }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "q13",
      number: 13,
      text: {
        en: "Which types of failures (1-4) fit which test levels (A-D) BEST?",
        fr: "Quels types de défaillances (1 à 4) correspondent le mieux aux niveaux de test (A à D) ?",
      },
      tableData: {
        headers: {
          en: ["Failures", "Test Levels"],
          fr: ["Défaillances", "Niveaux de Test"]
        },
        rows: {
         en:  [["1. Failures in system behavior as it deviates from the users business needs", "A. Component testing"],
          ["2. Failures in communication between components", "B. Component integration testing"],
          ["3. Failures in logic in a module", "C. System testing"],
          ["4. Failures in not correctly implemented business rules", "D. Acceptance testing"]
        ],
          fr: [
            ["1. Défaillances du comportement du système par rapport aux besoins métier de l'utilisateur", "A. Test unitaire"],
          ["2. Défaillances de communication entre les composants", "B. Test d'intégration des composants"],
          ["3. Défaillances de logique dans un module", "C. Test système"],
          ["4. Défaillances dues à une implémentation incorrecte des règles métier", "D. Test d'acceptation"]
          ]
        }
      },
      options: [
        {
          id: "a",
          text: { en: "1D, 2B, 3A, 4C", 
                fr: "1D, 2B, 3A, 4C" }
        },
        {
          id: "b",
          text: { en: "1D, 2B, 3C, 4A", 
                  fr: "1D, 2B, 3C, 4A" }
        },
        {
          id: "c",
          text: { en: " 1B, 2A, 3D, 4C", 
                  fr: " 1B, 2A, 3D, 4C" }
        },
        {
          id: "d",
          text: { en: "1C, 2B, 3A, 4D", 
                  fr: "1C, 2B, 3A, 4D" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "q14",
      number: 14,
      text: {
        en: "You are testing a user story with three acceptance criteria: AC1, AC2 and AC3. AC1 is covered by test case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three consecutive versions of the software as follows: Tests are repeated once you are informed that all defects found in the test run are corrected and a new version of the software is available. Which of the above tests are executed as regression tests?",
        fr: "Vous testez une user story avec trois critères d'acceptation : AC1, AC2 et AC3. AC1 est couvert par le cas de test TC1, AC2 par TC2 et AC3 par TC3. L'historique d'exécution des tests comporte trois séries de tests sur trois versions consécutives du logiciel, comme indiqué dans le tableau suivant: Les tests sont répétés une fois que vous êtes informé que tous les défauts trouvés lors de la série de tests sont corrigés et qu'une nouvelle version du logiciel est disponible. Parmi les tests ci-dessus, lesquels sont exécutés en tant que tests de régression ?",
      },
      tableData: {
        headers: {
          en: [" ", "Execution 1", "Execution 2", "Execution 3"],
          fr: [" ", "Execution 1", "Execution 2", "Execution 3"]
        },
        rows: {
         en:  [["TC1", "(1) Failed", "(4) Passed", "(7) Passed"],
          ["TC2", "(2) Passed ", "(5) Failed", "(8) Passed"],
          ["TC3", "(3) Failed", "(6) Failed", "(9) Passed"]
        ],
          fr: [
            ["CT1", "(1) Échoué", "(4) Réussi", "(7) Réussi"],
          ["CT2", "(2) Réussi ", "(5) Échoué", "(8) Réussi"],
          ["CT3", "(3) Échoué", "(6) Échoué", "(9) Réussi"]
          ]
        }
      },
      text2: {
        en: "Tests are repeated once you are informed that all defects found in the test run are corrected and a new version of the software is available. Which of the above tests are executed as regression tests?",
        fr: "Les tests sont répétés une fois que vous êtes informé que tous les défauts trouvés lors de la série de tests sont corrigés et qu'une nouvelle version du logiciel est disponible. Parmi les tests ci-dessus, lesquels sont exécutés en tant que tests de régression ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Only 4, 7, 8, 9", 
                fr: "Uniquement 4, 7, 8, 9" }
        },
        {
          id: "b",
          text: { en: "Only 5, 7", 
                  fr: "Uniquement 5, 7" }
        },
        {
          id: "c",
          text: { en: " Only 4, 6, 8, 9", 
                  fr: " Uniquement 4, 6, 8, 9" }
        },
        {
          id: "d",
          text: { en: "Only 5, 6", 
                  fr: "Uniquement 5, 6" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "q15",
      number: 15,
      text: {
        en: "Which of the following is NOT a benefit of static testing?",
        fr: "Laquelle des options suivantes n'est PAS un avantage des tests statiques ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Having less expensive defect management due to the ease of detecting defects later in the SDLC", 
                fr: "Une gestion des défauts moins coûteuse car les défauts sont plus faciles à détecter plus tard dans le SDLC (cycle de vie du développement logiciel)." }
        },
        {
          id: "b",
          text: { en: "Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing", 
                  fr: "La correction des défauts trouvés lors des tests statiques est généralement beaucoup moins coûteuse que la correction des défauts trouvés lors des tests dynamiques." }
        },
        {
          id: "c",
          text: { en: "Finding coding defects that might not have been found by only performing dynamic testing", 
                  fr: "La découverte de défauts de codage qui n'auraient peut-être pas été identifiés en effectuant uniquement des tests dynamiques." }
        },
        {
          id: "d",
          text: { en: "Detecting gaps and inconsistencies in requirements", 
                  fr: "La détection des lacunes et des incohérences dans les exigences" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "q16",
      number: 16,
      text: {
        en: "Which of the following is a benefit of early and frequent feedback?",
        fr: "Quel est l'avantage d'un feedback précoce et fréquent ?",
      },
      options: [
        {
          id: "a",
          text: { en: "It improves the test process for future projects", 
                fr: "Il améliore le processus de test pour les projets futurs." }
        },
        {
          id: "b",
          text: { en: "It forces customers to prioritize their requirements based on agreed risks", 
                  fr: "Il oblige les clients à prioriser leurs exigences en fonction des risques convenus." }
        },
        {
          id: "c",
          text: { en: "It provides a measure for the quality of changes", 
                  fr: "C'est le seul moyen de mesurer la qualité des changements" }
        },
        {
          id: "d",
          text: { en: "It helps avoid requirements misunderstandings", 
                  fr: "Il aide à éviter les malentendus sur les exigences." }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "q17",
      number: 17,
      text: {
        en: "The reviews being used in your organization have the following attributes: ",
        fr: "Les revues utilisées dans votre organisation présentent les attributs suivants :",
      },
        list: {
          en: ["There is the role of a scribe", "The main purpose is to evaluate quality", "The meeting is led by the author of the work product", "There is individual preparation", "A review report is produced"],
          fr: ["Présence d'un scribe", "Objectif principal : évaluation de la qualité", "Réunion animée par l'auteur du produit de travail", "Préparation individuelle attendue", "Production d'un rapport de revue"]
        },
      text2: {
        en: "Which of the following review types is MOST likely being used?",
        fr: "Quel type de revue est LE PLUS susceptible d'être utilisé parmi les choix suivants ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Informal review", 
                fr: "Revue informelle" }
        },
        {
          id: "b",
          text: { en: "Walkthrough", 
                  fr: "Relecture technique" }
        },
        {
          id: "c",
          text: { en: "Technical review", 
                  fr: "Revue technique" }
        },
        {
          id: "d",
          text: { en: "Inspection", 
                  fr: "Inspection" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "q18",
      number: 18,
      text: {
        en: "Which of these statements is NOT a factor that contributes to successful reviews?",
        fr: "Laquelle des affirmations suivantes N'EST PAS un facteur contribuant à la réussite des revues ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Participants should dedicate adequate time for the review", 
                fr: "Les participants doivent consacrer suffisamment de temps à la revue." }
        },
        {
          id: "b",
          text: { en: "Splitting large work products into small parts to make the required effort less intense", 
                  fr: "Diviser les produits de travail volumineux en petites parties pour réduire l'intensité de l'effort requis." }
        },
        {
          id: "c",
          text: { en: "Participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants review", 
                  fr: "Les participants doivent éviter les comportements susceptibles d'indiquer l'ennui, l'exaspération ou l'hostilité envers les autres participants." }
        },
        {
          id: "d",
          text: { en: "Failures found should be acknowledged, appreciated, and handled objectively", 
                  fr: "Les défaillances identifiées doivent être reconnues, appréciées et traitées de manière objective." }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "q19",
      number: 19,
      text: {
        en: "Which of the following is a characteristic of experience-based test techniques?",
        fr: "Laquelle des affirmations suivantes est une caractéristique des techniques de test basées sur l'expérience ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Test cases are created based on detailed design information", 
                fr: "Les cas de test sont créés à partir d'informations détaillées sur la conception." }
        },
        {
          id: "b",
          text: { en: "Items tested within the interface code section are used to measure coverage", 
                  fr: "Les éléments testés dans la section du code d'interface sont utilisés pour mesurer la couverture." }
        },
        {
          id: "c",
          text: { en: "The techniques heavily rely on the tester's knowledge of the software and the business domain", 
                  fr: "Les techniques s'appuient fortement sur la connaissance du testeur du logiciel et du domaine d'activité." }
        },
        {
          id: "d",
          text: { en: "The test cases are used to identify deviations from the requirements", 
                  fr: "Les cas de test sont utilisés pour identifier les écarts par rapport aux exigences." }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "q20",
      number: 20,
      text: {
        en: "You are testing a simplified apartment search form which has only two search criteria:",
        fr: "Vous testez un formulaire de recherche d'appartement simplifié qui ne comporte que deux critères de recherche :",
      },
      list: {
        en: ["floor (with three possible options: ground floor; first floor; second or higher floor)", "garden type (with three possible options: no garden; small garden; large garden)"],
        fr: ["Étage (avec trois options possibles : rez-de-chaussée ; premier étage ; deuxième étage ou supérieur)", "Type de jardin (avec trois options possibles : pas de jardin ; petit jardin ; grand jardin)"]
      },
      text2: {
        en: "Only apartments on the ground floor have gardens. The form has a built-in validation mechanism that will not allow you to use the search criteria which violate this rule. Each test has two input values: floor and garden type. You want to apply equivalence partitioning (EP) to cover each floor and each garden type in your tests. What is the MINIMAL number of test cases to achieve 100% EP coverage?",
        fr: "Seuls les appartements situés au rez-de-chaussée ont un jardin. Le formulaire dispose d'un mécanisme de validation intégré qui ne vous permettra pas d'utiliser les critères de recherche qui enfreignent cette règle. Chaque test a deux valeurs d'entrée : l'étage et le type de jardin. Vous voulez appliquer le partitionnement d'équivalence (PE) pour couvrir chaque étage et chaque type de jardin dans vos tests. Quel est le nombre MINIMAL de cas de test nécessaire pour atteindre une couverture PE de 100 % ?"
      },
      options: [
        {
          id: "a",
          text: { en: "3", 
                fr: "3" }
        },
        {
          id: "b",
          text: { en: "4", 
                  fr: "4" }
        },
        {
          id: "c",
          text: { en: "5", 
                  fr: "5" }
        },
        {
          id: "d",
          text: { en: "6", 
                  fr: "6" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "q21",
      number: 21,
      text: {
        en: "You are testing a system that calculates the final course grade for a given student. The final grade is assigned based on the final result, according to the following rules:",
        fr: "Vous testez un système qui calcule la note finale d'un cours pour un étudiant donné. La note finale est attribuée en fonction du résultat final, selon les règles suivantes :",
      },
      list: {
        en: ["0 - 50 points: failed", "51 - 60 points: fair", "61 - 70 points: satisfactory", "71 - 80 points: good", "81 - 90 points: very good", "91 - 100 points: excellent"],
        fr: ["0 - 50 points : Échec", "51 - 60 points: Passable", "61 - 70 points: Satisfaisant", "71 - 80 points: Bon", "81 - 90 points: Très bon", "91 - 100 points: Excellent"]
      },
      text3: {
        en: "What is the 2-value Boundary Value Analysis (BVA) coverage for the final result that is achieved with the existing test cases?",
        fr: "Quel est le taux de couverture de l'analyse des valeurs limites (BVA à 2 valeurs) pour le résultat final obtenu avec les cas de test existants ?"
      },
      text2: {
        en: "You have prepared the following set of test cases (see table above):",
        fr: "Vous avez préparé la série de cas de test suivante (voir tableau ci-dessus):"
      },
      tableData: {
        headers: {
          en: [" ", "Final result", "Final grade"],
          fr: [" ", "Résultat final", "Note finale"]
        },
        rows: {
         en:  [["TC1", "91", "excellent"],
          ["TC2", "50", "failed"],
          ["TC3", "81", "very good"],
          ["TC4", "60", "fair"],
          ["TC5", "70", "satisfactory"],
          ["TC6", "80", "good"]
        ],
          fr: [["CT1", "91", "Excellent"],
          ["CT2", "50", "Échec"],
          ["CT3", "81", "Très bon"],
          ["CT4", "60", "Passable"],
          ["CT5", "70", "Satisfaisant"],
          ["CT6", "80", "Bon"]
          ]
        }
      },
      options: [
        {
          id: "a",
          text: { en: "50%", 
                fr: "50%" }
        },
        {
          id: "b",
          text: { en: "60%", 
                  fr: "60%" }
        },
        {
          id: "c",
          text: { en: "33.3%", 
                  fr: "33.3%" }
        },
        {
          id: "d",
          text: { en: "100%", 
                  fr: "100%" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "q22",
      number: 22,
      text: {
        en: "Your favorite bicycle daily rental store has just introduced a new Customer Relationship Management system and asked you, one of their most loyal members, to test it. The implemented features are as follows:",
        fr: "Votre magasin de location de vélos préféré introduit un nouveau système de gestion de la relation client (CRM) et vous demande, en tant que membre fidèle, de le tester. Voici les fonctionnalités mises en œuvre :",
      },
      list: {
        en: ["Anyone can rent a bicycle, but members receive a 20% discount", "However, if the return deadline is missed, the discount is no longer available", "After 15 rentals, members get a gift: a T-Shirt"],
        fr: ["N'importe qui peut louer un vélo, mais les membres bénéficient d'une réduction de 20 %.", "Cependant, si le délai de retour est dépassé, la réduction n'est plus applicable.", "Après 15 locations, les membres reçoivent un cadeau : un T-Shirt."]
      },
      text2: {
        en: "Decision table describing the implemented features looks as follows:",
        fr: "Le tableau de décision décrivant les fonctionnalités mises en œuvre :"
      },
      text3 : {
        en: "Based ONLY on the feature description of the Customer Relationship Management system, which of the above rules describes an impossible situation?",
        fr: "En se basant UNIQUEMENT sur la description des fonctionnalités du système de gestion de la relation client, laquelle des règles ci-dessus décrit une situation impossible ?"
      },
      tableData: {
        headers: {
          en: ["CONDITIONS", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8"],
          fr: ["CONDITIONS", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8"]
        },
        rows: {
         en:  [["Being a member", "T", "T", "T", "T", "F", "F", "F", "F"],
          ["Missing deadline", "T", "F", "T", "F", "T", "F", "F", "T"],
          ["15th rental", "F", "F", "T", "T", "F", "F", "T", "T"],
          ["ACTIONS", " ", " ", " ", " ", " ", " ", " ", " "],
          ["20% discount", " ", "X", " ", "X", " ", " ", " ", " "],
          ["Gift T-Shirt", " ", " ", "X", "X", " ", " ", " ", "X"],
        ],
          fr: [["Être membre", "V", "V", "V", "V", "F", "F", "F", "F"],
          ["Délais non respectés", "V", "F", "V", "F", "V", "F", "F", "V"],
          ["15ème location", "F", "F", "V", "V", "F", "F", "V", "V"],
          ["ACTIONS", " ", " ", " ", " ", " ", " ", " ", " "],
          ["20% de réduction", " ", "X", " ", "X", " ", " ", " ", " "],
          ["T-shirt cadeau", " ", " ", "X", "X", " ", " ", " ", "X"],
          ]
        }
      },
      options: [
        {
          id: "a",
          text: { en: "R4", 
                fr: "R4" }
        },
        {
          id: "b",
          text: { en: "R2", 
                  fr: "R2" }
        },
        {
          id: "c",
          text: { en: "R6", 
                  fr: "R6" }
        },
        {
          id: "d",
          text: { en: "R8", 
                  fr: "R8" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "q23",
      number: 23,
      text: {
        en: "You test a system whose lifecycle is modeled by the state transition diagram shown below. The system starts in the INIT state and ends its operation in the OFF state.",
        fr: "Vous testez un système dont le cycle de vie est modélisé par le diagramme de transition d'état présenté ci-dessous. Le système démarre dans l'état INIT et termine son fonctionnement dans l'état OFF.",
      },
      image: "./src/images/Transittion Dagram A-Q23.drawio.png",
      imageAlt: {
        en: "State Transition exam A question 23",
        fr: "Etat de Transition examen A question 23"
      },
      text2: {
        en: "What is the MINIMAL number of test cases to achieve valid transitions coverage?",
        fr: "Quel est le NOMBRE MINIMUM de cas de test pour atteindre une couverture des transitions valides ?"
      },
      options: [
        {
          id: "a",
          text: { en: "4", 
                fr: "4" }
        },
        {
          id: "b",
          text: { en: "2", 
                  fr: "2" }
        },
        {
          id: "c",
          text: { en: "7", 
                  fr: "7" }
        },
        {
          id: "d",
          text: { en: "3", 
                  fr: "3" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "q24",
      number: 24,
      text: {
        en: "Your test suite achieved 100% statement coverage. What is the consequence of this fact?",
        fr: "Votre suite de tests a atteint une couverture des instructions de 100 %. Quelle est la conséquence de ce fait ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Each instruction in the code that contains a defect has been executed at least once", 
                fr: "Chaque instruction du code contenant un défaut a été exécutée au moins une fois." }
        },
        {
          id: "b",
          text: { en: "Any test suite containing more test cases than your test suite will also achieve 100% statement coverage", 
                  fr: "Toute suite de tests contenant plus de cas de test que votre suite de tests atteindra également une couverture de code de 100 %." }
        },
        {
          id: "c",
          text: { en: "Each path in the code has been executed at least once", 
                  fr: "Chaque chemin dans le code a été exécuté au moins une fois." }
        },
        {
          id: "d",
          text: { en: "Every combination of input values has been tested at least once", 
                  fr: "Toutes les combinaisons de valeurs d'entrée ont été testées au moins une fois." }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "q25",
      number: 25,
      text: {
        en: "Which of the following is NOT true for white-box testing?",
        fr: "Laquelle des affirmations suivantes n'est PAS vraie pour les tests en boîte blanche ?",
      },
      options: [
        {
          id: "a",
          text: { en: "During white-box testing the entire software implementation is considered", 
                fr: "Lors des tests en boîte blanche, l'intégralité de l'implémentation logicielle est prise en compte." }
        },
        {
          id: "b",
          text: { en: "White-box coverage metrics can help identify additional tests to increase code coverage", 
                  fr: "Les mesures de couverture des tests en boîte blanche peuvent aider à identifier des tests supplémentaires pour augmenter la couverture du code." }
        },
        {
          id: "c",
          text: { en: "White-box test techniques can be used in static testing", 
                  fr: "Les techniques de test en boîte blanche peuvent être utilisées dans les tests statiques." }
        },
        {
          id: "d",
          text: { en: "White-box testing can help identify gaps in requirements implementation", 
                  fr: "Les tests en boîte blanche peuvent aider à identifier les lacunes dans la mise en œuvre des exigences." }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "q26",
      number: 26,
      text: {
        en: "Which of the following BEST describes the concept behind error guessing?",
        fr: "Laquelle des affirmations suivantes décrit le mieux le concept d'estimation d'erreurs ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers", 
                fr: "L'estimation d'erreurs consiste à utiliser vos connaissances et votre expérience des défauts trouvés dans le passé et des erreurs typiques commises par les développeurs." }
        },
        {
          id: "b",
          text: { en: "Error guessing involves using your personal experience of development and the errors you made as a developer", 
                  fr: "L'estimation d'erreurs consiste à utiliser votre expérience personnelle du développement et les erreurs que vous avez commises en tant que développeur." }
        },
        {
          id: "c",
          text: { en: "Error guessing requires you to imagine that you are the user of the test object and to guess errors the user could make interacting with it", 
                  fr: "L'estimation d'erreurs vous oblige à imaginer que vous êtes l'utilisateur de l'objet de test et à deviner les erreurs que l'utilisateur pourrait commettre en interagissant avec lui." }
        },
        {
          id: "d",
          text: { en: "Error guessing requires you to rapidly duplicate the development task to identify the sort of errors a developer might make", 
                  fr: "L'estimation d'erreurs vous oblige à reproduire rapidement la tâche de développement afin d'identifier le type d'erreurs qu'un développeur pourrait commettre." }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "q27",
      number: 27,
      text: {
        en: "In your project there has been a delay in the release of a brand-new application and test execution started late, but you have very detailed domain knowledge and good analytical skills. The full list of requirements has not yet been shared with the team, but management is asking for some test results to be presented.",
        fr: "Il y a eu un retard dans la publication d'une toute nouvelle application dans votre projet, et l'exécution des tests a commencé tardivement. Cependant, vous avez une connaissance très détaillée du domaine et de bonnes compétences d'analyse. La liste complète des exigences n'a pas encore été partagée avec l'équipe, mais la direction vous demande de présenter des résultats de test.",
      },
      text2 : {
        en: "Which test technique fits BEST in this situation?",
        fr: "Quelle technique de test convient le MIEUX à cette situation ?"
      },
      options: [
        {
          id: "a",
          text: { en: " Checklist-based testing", 
                fr: "Tests basés sur des checklists" }
        },
        {
          id: "b",
          text: { en: "Error guessing", 
                  fr: "Estimation d'erreurs" }
        },
        {
          id: "c",
          text: { en: "Exploratory testing", 
                  fr: "Tests exploratoires" }
        },
        {
          id: "d",
          text: { en: "Branch testing", 
                  fr: "Tests de branches" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "q28",
      number: 28,
      text: {
        en: "Which of the following BEST describes the way acceptance criteria can be documented?",
        fr: "Laquelle des descriptions suivantes correspond le mieux à la façon de documenter les critères d'acceptation ?",
      },
      options: [
        {
          id: "a",
          text: { en: " Performing retrospectives to determine the actual needs of the stakeholders regarding a given user story", 
                fr: "Réaliser des rétrospectives pour déterminer les besoins réels des parties prenantes concernant une user story donnée." }
        },
        {
          id: "b",
          text: { en: "Using the given/when/then format to describe an example test condition related to a given user story", 
                  fr: "Utiliser le format donné/quand/alors (given/when/then) pour décrire un exemple de condition de test liée à une user story donnée." }
        },
        {
          id: "c",
          text: { en: "Using verbal communication to reduce the risk of misunderstanding the acceptance criteria by others", 
                  fr: "Utiliser la communication verbale pour réduire le risque de mauvaise compréhension des critères d'acceptation par les autres." }
        },
        {
          id: "d",
          text: { en: "Documenting risks related to a given user story in a test plan to facilitate the risk-based testing of a given user story", 
                  fr: "Documenter les risques liés à une user story donnée dans un plan de test pour faciliter les tests basés sur les risques." }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "q29",
      number: 29,
      text: {
        en: "Consider the following user story:",
        fr: "Considérez l'user story suivante :"
      },
      italic: {
        en: "As an Editor. \nI want to review content before it is published. \nso that I can assure the grammar is correct",
        fr: "En tant qu'éditeur. \nje veux réviser le contenu avant sa publicatio. \nPour M'assurer que la grammaire est correcte"
      },
      textRe: {
        en: "and its acceptance criteria:",
        fr: "et ses critères d'acceptation :"
      },
      list: {
        en: ["The user can log in to the content management system with 'Editor' role", "The editor can view existing content pages", "The editor can edit the page content", "The editor can add markup comments", "The editor can save changes", "The editor can reassign to the 'content owner' role to make updates"],
        fr: ["L'éditeur peut se connecter au système de gestion de contenu avec le rôle 'Rédacteur'.", "L'éditeur peut visualiser les pages de contenu existantes.", "L'éditeur peut modifier le contenu des pages.", " L'éditeur peut ajouter des commentaires de balisage.", "L'éditeur peut enregistrer les modifications.", "L'éditeur peut réattribuer le contenu au rôle 'Propriétaire du contenu' pour qu'il soit mis à jour."],
      },
      text3: {
        en: "Which of the following is the BEST example of an ATDD test for this user story?",
        fr: "Lequel des éléments suivants est le MEILLEUR exemple de test ATDD pour cette user story ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Test if the editor can save the document after edit the page content", 
                fr: "Tester si le rédacteur en chef peut enregistrer le document après avoir modifié le contenu de la page." }
        },
        {
          id: "b",
          text: { en: "Test if the content owner can log in and make updates to the content", 
                  fr: "Tester si le propriétaire du contenu peut se connecter et apporter des modifications au contenu." }
        },
        {
          id: "c",
          text: { en: "Test if the editor can schedule the edited content for publication", 
                  fr: "Tester si le rédacteur en chef peut programmer la publication du contenu modifié." }
        },
        {
          id: "d",
          text: { en: "Test if the editor can reassign to another editor to make updates", 
                  fr: "Tester si le rédacteur en chef peut réattribuer le contenu à un autre rédacteur pour qu'il le mette à jour." }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "q30",
      number: 30,
      text: {
        en: "How do testers add value to iteration and release planning?",
        fr: "Comment les testeurs ajoutent-ils de la valeur à la planification des itérations et des versions ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Testers determine the priority of the user stories to be developed", 
                fr: "Les testeurs déterminent la priorité des user stories à développer." }
        },
        {
          id: "b",
          text: { en: "Testers focus only on the functional aspects of the system to be tested", 
                  fr: "Les testeurs se concentrent uniquement sur les aspects fonctionnels du système à tester." }
        },
        {
          id: "c",
          text: { en: "Testers participate in the detailed risk identification and risk assessment of user stories", 
                  fr: "Les testeurs participent à l'identification et à l'évaluation détaillées des risques des user stories." }
        },
        {
          id: "d",
          text: { en: "Testers guarantee the release of high-quality software through early test design during the release planning", 
                  fr: "Les testeurs garantissent la publication de logiciels de haute qualité grâce à la conception de tests en amont lors de la planification des versions." }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "q31",
      number: 31,
      text: {
        en: "Which TWO of the following options are the exit criteria for testing a system?",
        fr: "Laquelle des options suivantes SONT DEUX critères de sortie pour les tests d'un système ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Test environment readiness", 
                fr: "Disponibilité de l'environnement de test" }
        },
        {
          id: "b",
          text: { en: "The ability to log in to the test object by the tester", 
                  fr: "Capacité du testeur à se connecter à l'objet de test" }
        },
        {
          id: "c",
          text: { en: "Estimated defect density is reached", 
                  fr: "Densité estimée des défauts atteinte" }
        },
        {
          id: "d",
          text: { en: "Requirements are translated into given/when/then format", 
                  fr: "Exigences traduites au format donné/quand/alors" }
        },
        {
          id: "e",
          text: { en: "Regression tests are automated", 
                  fr: "Tests de régression automatisés" }
        }
      ],
      correctAnswers: ["c", "e"],
      multipleAnswers: true
    },
    {
      id: "q32",
      number: 32,
      text: {
        en: "Your team uses the three-point estimation technique to estimate the test effort for a new high-risk feature. The following estimates were made:",
        fr: "Votre équipe utilise la méthode d'estimation à trois points pour estimer l'effort de test d'une nouvelle fonctionnalité à haut risque. Les estimations suivantes ont été faites :"
      },
      list :{
        en: ["Most optimistic estimation: 2 person-hours", "Most likely estimation: 11 person-hours", "Most pessimistic estimation: 14 person-hours"],
        fr: ["Estimation la plus optimiste : 2 personne-heures", "Estimation la plus probable : 11 personne-heures", "Estimation la plus pessimiste : 14 personne-heures"]
      },
      text2: {
        en:"What is the final estimate?",
        fr:"Quelle est l'estimation finale ?"
      },
      options: [
        {
          id: "a",
          text: { en: "9 person-hours", 
                fr: "9 personne-heures" }
        },
        {
          id: "b",
          text: { en: "14 person-hours", 
                  fr: "14 personne-heures" }
        },
        {
          id: "c",
          text: { en: "11 person-hours", 
                  fr: "11 personne-heures" }
        },
        {
          id: "d",
          text: { en: "10 person-hours", 
                  fr: "10 personne-heures" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "q33",
      number: 33,
      text: {
        en: "You are testing a mobile application that allows users to find a nearby restaurant based on the type of food they want to eat. Consider the following list of test cases, priorities (i.e., a smaller number means a higher priority), and dependencies:",
        fr: "Vous testez une application mobile qui permet aux utilisateurs de trouver un restaurant à proximité en fonction du type de cuisine qu'ils souhaitent. Prenez en compte la liste suivante de cas de test, leurs priorités (un chiffre plus petit signifie une priorité plus élevée) et leurs dépendances :"
      },
      tableData:{
        headers: {
          en: ["Test case number", "Test condition covered", "Priority", "Logical dependency"],
          fr: ["Numéro de cas de test", "Condition de test couverte", "Priorité", "Dépendance logique"]
        },
        rows: {
          en: [
            ["TC 001", "Select type of food", "3", "none"],
            ["TC 002", "Select restauran", "2", "TC 001"],
            ["TC 003", "Get direction", "1", "TC 002"],
            ["TC 004", "Call restaurant", "2", "TC 002"],
            ["TC 005", "Make reservation", "3", "TC 002"],
          ],
          fr: [
            ["TC 001", "Sélectionnez le type de nourriture", "3", "aucune"],
            ["TC 002", "Sélectionnez un restaurant", "2", "TC 001"],
            ["TC 003", "Obtenir l'itinéraire", "1", "TC 002"],
            ["TC 004", "Appeler le restaurant", "2", "TC 002"],
            ["TC 005", "Faire une réservation", "3", "TC 002"],
          ]
        }
      },
      text3: {
        en:"Which of the following test cases should be executed as the third one?",
        fr:"Lequel des cas de test suivants doit être exécuté en troisième position ?"
      },
      options: [
        {
          id: "a",
          text: { en: "TC 003", 
                fr: "TC 003" }
        },
        {
          id: "b",
          text: { en: "TC 005", 
                  fr: "TC 005" }
        },
        {
          id: "c",
          text: { en: "TC 002", 
                  fr: "TC 002" }
        },
        {
          id: "d",
          text: { en: "TC 001", 
                  fr: "TC 001" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    }, 
    {
      id: "q34",
      number: 34,
      text: {
        en: "Consider the following test categories (1-4) and agile testing quadrants (A-D):",
        fr: "Considérez les catégories de test suivantes (1-4) et les quadrants de test Agile (A-D):"
      },
      numerList :{
        en: ["Usability testing", "Component testing", "Functional testing", "Reliability testing"],
        fr: ["Test d'utilisabilité", "Test de composants", "Test fonctionnel", "Test de fiabilité"]
      },
      alphaList: {
        en: ["Agile testing quadrant Q1: technology facing, supporting the development team", "Agile testing quadrant Q2: business facing, supporting the development team", "Agile testing quadrant Q3: business facing, critique the product", "Agile testing quadrant Q4: technology facing, critique the product"],
        fr: ["Quadrant de test agile Q1 : orienté technologie, supportant l'équipe de développement", "Quadrant de test agile Q2 : orienté métier, supportant l'équipe de développement", "Quadrant de test agile Q3 : orienté métier, critique du produit", "Quadrant de test agile Q4 : orienté technologie, critique du produit"]
      },
      text3: {
        en:"How do the following test categories map onto the agile testing quadrants?",
        fr:"Quelle est la correspondance entre les catégories de test et les quadrants de test agile ?"
      },
      options: [
        {
          id: "a",
          text: { en: "1C, 2A, 3B, 4D", 
                fr: "1C, 2A, 3B, 4D" }
        },
        {
          id: "b",
          text: { en: "1D, 2A, 3C, 4B", 
                  fr: "1D, 2A, 3C, 4B" }
        },
        {
          id: "c",
          text: { en: "1C, 2B, 3D, 4A", 
                  fr: "1C, 2B, 3D, 4A" }
        },
        {
          id: "d",
          text: { en: "1D, 2B, 3C, 4A", 
                  fr: "1D, 2B, 3C, 4A" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "q35",
      number: 35,
      text: {
        en: "During a risk analysis the following risk was identified and assessed",
        fr: "Lors d'une analyse des risques, le risque suivant a été identifié et évalué :"
      },
      list :{
        en: ["Risk: Response time is too long to generate a report", "Risk likelihood: medium; risk impact: high", "Response to risk:"],
        fr: ["Risque : Le temps de réponse est trop long pour générer un rapport", "Probabilité du risque : Moyenne ; Impact du risque : Élevé", "Réponse au risque :"]
      },
      listOpen: {
        en: ["An independent test team performs performance testing during system testing", "A selected sample of end users performs alpha and beta acceptance testing before the release"],
        fr: ["Une équipe de test indépendante réalise des tests de performance pendant les tests système.", "Un échantillon sélectionné d'utilisateurs finaux effectue des tests d'acceptation alpha et bêta avant la publication."]
      },
      text3: {
        en:"What measure is proposed to be taken in response to this analyzed risk?",
        fr:"Quelle mesure est proposée pour répondre au risque analysé ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Risk acceptance", 
                fr: "Acceptation du risque" }
        },
        {
          id: "b",
          text: { en: " Contingency plan", 
                  fr: "Plan de contingence" }
        },
        {
          id: "c",
          text: { en: "Risk mitigation", 
                  fr: "Atténuation des risques" }
        },
        {
          id: "d",
          text: { en: "Risk transfer",  
                  fr: "Transfert de risque" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "q36",
      number: 36,
      text: {
        en: "Which work product can be used by an agile team to show the amount of work that has been completed and the amount of total work remaining for a given iteration?",
        fr: "Quel produit de travail permet à une équipe Agile de visualiser le montant du travail effectué et le montant total du travail restant pour une itération donnée ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Acceptance criteria", 
                fr: "Critères d'acceptation" }
        },
        {
          id: "b",
          text: { en: "Defect report", 
                  fr: "Rapport de défauts" }
        },
        {
          id: "c",
          text: { en: "Test completion report", 
                  fr: "Rapport de fin de test" }
        },
        {
          id: "d",
          text: { en: "Risk transfer",  
                  fr: "Burndown chart" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "q37",
      number: 37,
      text: {
        en: "You need to update one of the automated test scripts to be in line with a new requirement. Which process indicates that you create a new version of the test script in the test repository?",
        fr: "Vous devez mettre à jour l'un des scripts de test automatisé pour qu'il corresponde à une nouvelle exigence. Quel processus implique la création d'une nouvelle version du script de test dans le référentiel de test ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Traceability management", 
                fr: "Gestion de la traçabilité" }
        },
        {
          id: "b",
          text: { en: "Maintenance testing", 
                  fr: "Tests de maintenance" }
        },
        {
          id: "c",
          text: { en: "Configuration management", 
                  fr: "Gestion de la configuration" }
        },
        {
          id: "d",
          text: { en: "Requirements engineering",  
                  fr: "Ingénierie des exigences" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "q38",
      number: 38,
      text: {
        en: "You received the following defect report from the developers stating that the anomaly described in this test report is not reproducible.",
        fr: "Vous avez reçu des développeurs le rapport de test suivant indiquant que l'anomalie décrite dans ce rapport de test n'est pas reproductible."
      },
      italic: {
        en:"Application hangs up;  \n2022-May-03 - John Doe - Rejected; \nThe application hangs up after entering “Test input: $ä” in the Name field on the new user creation screen. Tried to log off, log in with test_admin01 account, same issue. Tried with other test admin accounts, same issue. No error message received, log (see attached) contains fatal error notification. Based on the test case TC-1305, the application should accept the provided input and create the user. Please fix with high priority, this feature is related to REQ-0012, which is a critical new business requirement.",
        fr: "L'application se bloque \n2022-05-03 - John Doe - Rejeté \nL'application se bloque après avoir saisi « Test input: $ä » dans le champ Nom sur l'écran de création de nouvel utilisateur. J'ai essayé de me déconnecter, de me connecter avec le compte test_admin01, même problème. J'ai essayé avec d'autres comptes d'administration de test, même problème. Aucun message d'erreur reçu ; le journal (voir pièce jointe) contient une notification d'erreur fatale. Sur la base du cas de test TC-1305, l'application devrait accepter l'entrée fournie et créer l'utilisateur. Veuillez corriger en priorité élevée, cette fonctionnalité est liée à REQ-0012, qui est une nouvelle exigence métier critique."
      },
      text3: {
        en: "What critical information is MISSING from this test report that would have been useful for the developers?",
        fr: "Quelle information critique est MANQUANTE dans ce rapport de test et aurait été utile pour les développeurs ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Expected result and actual result", 
                fr: "Résultat attendu et résultat réel" }
        },
        {
          id: "b",
          text: { en: "References and defect status", 
                  fr: "Références et état du défaut" }
        },
        {
          id: "c",
          text: { en: "Test environment and test item", 
                  fr: "Environnement de test et élément de test" }
        },
        {
          id: "d",
          text: { en: "Priority and severity",  
                  fr: "Priorité et sévérité" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "q39",
      number: 39,
      text: {
        en: "Which test activity does a data preparation tool support?",
        fr: "Quelle activité de test est prise en charge par un outil de préparation de données ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Test monitoring and control", 
                fr: "Surveillance et contrôle des tests" }
        },
        {
          id: "b",
          text: { en: "Test analysis", 
                  fr: "Analyse et conception des tests" }
        },
        {
          id: "c",
          text: { en: "Test design and implementation", 
                  fr: "Implémentation et exécution des tests" }
        },
        {
          id: "d",
          text: { en: "Test completion",  
                  fr: "Clôture des tests" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "q40",
      number: 40,
      text: {
        en: "Which item correctly identifies a potential risk of performing test automation?",
        fr: "Parmi les options suivantes, laquelle identifie correctement un risque potentiel lié à l'automatisation des tests ?"
      },
      options: [
        {
          id: "a",
          text: { en: "It may introduce unknown regressions in production", 
                fr: "Introduction de régressions inconnues en production" }
        },
        {
          id: "b",
          text: { en: "Sufficient efforts to maintain testware may not be properly allocated", 
                  fr: "Allocation insuffisante des efforts de maintenance des éléments de test" }
        },
        {
          id: "c",
          text: { en: "Testing tools and associated testware may not be sufficiently relied upon", 
                  fr: "Fiabilité insuffisante des outils de test et des éléments de test associés" }
        },
        {
          id: "d",
          text: { en: "It may reduce the time allocated for manual testing",  
                  fr: "Réduction du temps alloué aux tests manuels" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    }
  ]
}


////////////////////////////////////////////////////


export const sampleExamB = {
  id: "exam-b",
  title: {
    en: "Sample Exam B",
    fr: "Examen B d'exemple"
  },
  timeLimit: 30, // time in minutes
  questions: [
    {
      id: "qb1",
      number: 1,
      text: {
        en: "Which of the following is an example of why testing is necessary?",
        fr: "Laquelle des situations suivantes est un exemple de la nécessité des tests ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by the users", 
                fr: "Les tests dynamiques améliorent la qualité en provoquant des défaillances des objets de test d'une manière que les utilisateurs ne pourraient jamais réaliser." }
        },
        {
          id: "b",
          text: { en: "Static testing is used by developers to identify failures in their program code earlier than can be achieved through dynamic testing", 
                  fr: "Les tests statiques sont utilisés par les développeurs pour identifier les défaillances dans leur code source plus tôt que ce qui est possible avec les tests dynamiques." }
        },
        {
          id: "c",
          text: { en: "Static analysis provides evidence to customers that the elements of the system that provide no outputs are fit for release", 
                  fr: "L'analyse statique fournit aux clients la preuve que les éléments du système qui ne produisent aucune sortie sont prêts à être mis en production." }
        },
        {
          id: "d",
          text: { en: "Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products", 
                  fr: "Les revues augmentent la qualité des spécifications d'exigences et réduisent le nombre de modifications nécessaires aux produits de travail dérivés." }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "qb2",
      number: 2,
      text: {
        en: "Which of the following statements about quality assurance (QA) and/or quality control (QC) is correct?",
        fr: "Laquelle des affirmations suivantes concernant l'assurance qualité (AQ) et/ou le contrôle qualité (CQ) est correcte ?"
      },
      options: [
        {
          id: "a",
          text: { en: "QA is performed as part of testing", 
                fr: "L'AQ est réalisée dans le cadre des tests" }
        },
        {
          id: "b",
          text: { en: "Testing is performed as part of QC", 
                  fr: "Les tests sont effectués dans le cadre du CQ" }
        },
        {
          id: "c",
          text: { en: "Testing is another term for QC", 
                  fr: "Les tests sont un autre terme pour le CQ" }
        },
        {
          id: "d",
          text: { en: "Testing is performed as part of QA ", 
                  fr: "Les tests sont effectués dans le cadre de l'AQ" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qb3",
      number: 3,
      text: {
        en: "One of the 'principles of testing' states that exhaustive testing is impossible. Which of the following is an example of addressing this principle in practice?",
        fr: "L'un des « principes de test » stipule que les tests exhaustifs sont impossibles. Lequel des éléments suivants est un exemple de la mise en pratique de ce principe ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Creating test cases that cover every possible specified output", 
                fr: "Créer des cas de test qui couvrent toutes les sorties spécifiées possibles" }
        },
        {
          id: "b",
          text: { en: "Documenting all possible test input variations and prioritizing these based on importance", 
                  fr: "Documenter toutes les variations d'entrées de test possibles et les hiérarchiser en fonction de leur importance" }
        },
        {
          id: "c",
          text: { en: "Starting testing as early as possible with reviews and other static testing approaches", 
                  fr: "Commencer les tests le plus tôt possible par des revues et d'autres approches de test statique" }
        },
        {
          id: "d",
          text: { en: "Using equivalence partitioning and boundary value analysis to generate test cases", 
                  fr: "Utiliser le partitionnement d'équivalence et l'analyse des valeurs limites pour générer des cas de test" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "qb4",
      number: 4,
      text: {
        en: "Which test activity involves working with test data requirements, test conditions, test environment requirements and test cases?",
        fr: "Quelle activité de test implique de travailler avec les exigences relatives aux données de test, les conditions de test, les exigences relatives à l'environnement de test et les cas de test ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Test design", 
                fr: "Conception des tests" }
        },
        {
          id: "b",
          text: { en: "Test execution", 
                  fr: "Exécution des tests" }
        },
        {
          id: "c",
          text: { en: "Test analysis", 
                  fr: "Analyse des tests" }
        },
        {
          id: "d",
          text: { en: "Test implementation", 
                  fr: "implémentation des tests" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qb5",
      number: 5,
      text: {
        en: "Which of the following is MOST likely to impact how testing is performed for a given test object?",
        fr: "Lequel des éléments suivants est le plus susceptible d'influencer la manière dont les tests sont effectués pour un objet de test donné ?",
      },
      options: [
        {
          id: "a",
          text: { en: "The average level of experience of the organization's marketing team", 
                fr: "Le niveau d'expérience moyen de l'équipe marketing de l'organisation" }
        },
        {
          id: "b",
          text: { en: "The knowledge of users that a new system is being developed for them", 
                  fr: "La connaissance des utilisateurs qu'un nouveau système est en cours de développement pour eux" }
        },
        {
          id: "c",
          text: { en: "The number of years' experience of the members of the test team", 
                  fr: "Le nombre d'années d'expérience des membres de l'équipe de test" }
        },
        {
          id: "d",
          text: { en: "The end user's organizational structure for a commercial music streaming application", 
                  fr: "La structure organisationnelle des utilisateurs finaux d'une application de streaming de musique commerciale" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "qb6",
      number: 6,
      text: {
        en: "Which of the following statements is a CORRECT example of the value of traceability?",
        fr: "Laquelle des affirmations suivantes est un EXEMPLE CORRECT de la valeur de la traçabilité ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Traceability between the mitigated risks and passing test cases provides a means of determining the level of residual risk", 
                fr: "La traçabilité entre les risques atténués et les cas de test réussis permet de déterminer le niveau de risque résiduel" }
        },
        {
          id: "b",
          text: { en: "Traceability between user requirements and test execution results provides a means of measuring project progress against business goals", 
                  fr: "La traçabilité entre les exigences des utilisateurs et les résultats d'exécution des tests permet de mesurer l'avancement du projet par rapport aux objectifs commerciaux" }
        },
        {
          id: "c",
          text: { en: "Traceability between testers and failing test cases provides a means of determining the skill level of the testers", 
                  fr: "La traçabilité entre les testeurs et les cas de test en échec permet de déterminer le niveau de compétence des testeurs" }
        },
        {
          id: "d",
          text: { en: "Traceability between the identified risks and written test conditions provides a means of determining which risks are worth testing", 
                  fr: "La traçabilité entre les risques identifiés et les conditions de test écrites permet de déterminer quels risques valent la peine d'être testés" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qb7",
      number: 7,
      text: {
        en: "Which of the following is MOST likely to be an example of a tester using a generic skill when testing?",
        fr: "Laquelle des situations suivantes est l'exemple le plus probable d'un testeur utilisant une compétence générique lors d'un test ?",
      },
      options: [
        {
          id: "a",
          text: { en: "The tester's deep knowledge of a variety of computer games meant that they got on well with one of the developers who was also into gaming", 
                fr: "Grâce à sa connaissance approfondie de divers jeux vidéo, le testeur s'est bien entendu avec l'un des développeurs qui était également un joueur" }
        },
        {
          id: "b",
          text: { en: "The tester was a former pilot and was better able to understand the acceptance criteria for the helicopter control system", 
                  fr: "L'ancien pilote d'hélicoptère devenu testeur était mieux à même de comprendre les critères d'acceptation du système de contrôle de l'hélicoptère" }
        },
        {
          id: "c",
          text: { en: "The tester previously worked as a programmer and used their skills in this area to better communicate with the business analysts", 
                  fr: "Le testeur ayant auparavant travaillé comme programmeur a utilisé ses compétences dans ce domaine pour mieux communiquer avec les analystes métier" }
        },
        {
          id: "d",
          text: { en: "The tester was very careful not to make mistakes when they methodically generated test cases prior to starting their exploratory testing session", 
                  fr: "Le testeur a fait très attention à ne pas commettre d'erreurs en générant méthodiquement des cas de test avant de commencer sa session de test exploratoire" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qb8",
      number: 8,
      text: {
        en: "Which of the following is an advantage of the whole-team approach?",
        fr: "Quel est l'un des avantages de l'approche par équipe entière ?",
      },
      options: [
        {
          id: "a",
          text: { en: " It allows team members to take on any role at any time", 
                fr: "Elle permet aux membres de l'équipe d'assumer n'importe quel rôle à tout moment" }
        },
        {
          id: "b",
          text: { en: " It only needs a single team to support the complete development project", 
                  fr: "Elle n'a besoin que d'une seule équipe pour prendre en charge l'intégralité du projet de développement" }
        },
        {
          id: "c",
          text: { en: "It embeds business representatives alongside developers in the same team", 
                  fr: "Elle intègre des représentants de l'entreprise aux côtés des développeurs au sein de la même équipe" }
        },
        {
          id: "d",
          text: { en: "It generates a team synergy that benefits the entire project", 
                  fr: "Elle génère une synergie d'équipe qui profite à l'ensemble du projet" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "qb9",
      number: 9,
      text: {
        en: "Which of the following statements about the chosen software development lifecycle is CORRECT?",
        fr: "Laquelle des affirmations suivantes concernant le cycle de vie du développement logiciel choisi est CORRECTE ?",
      },
      options: [
        {
          id: "a",
          text: { en: "If agile software development is used, system test automation replaces the need for regression testing", 
                fr: "Si le développement agile est utilisé, l'automatisation des tests système remplace le besoin de tests de régression" }
        },
        {
          id: "b",
          text: { en: "If a sequential development model is used, then the dynamic testing is typically restricted to later in the lifecycle", 
                  fr: "Si un modèle de développement séquentiel est utilisé, les tests dynamiques sont généralement limités à une phase ultérieure du cycle de vie" }
        },
        {
          id: "c",
          text: { en: "If an iterative development model is used, then component testing is typically performed manually by developers ", 
                  fr: "Si un modèle de développement itératif est utilisé, les tests unitaires sont généralement effectués manuellement par les développeurs" }
        },
        {
          id: "d",
          text: { en: "If an incremental development model is used, then static testing is done in early increments and dynamic testing in later increments", 
                  fr: "Si un modèle de développement incrémental est utilisé, les tests statiques sont effectués dans les premiers incréments et les tests dynamiques dans les incréments ultérieurs" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qb10",
      number: 10,
      text: {
        en: "Which of the following is a good testing practice that applies to all software development lifecycles?",
        fr: "Laquelle des pratiques de test suivantes est applicable à tous les cycles de vie de développement logiciel ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Testers should review work products as part of the next development phase", 
                fr: "Les testeurs doivent examiner les produits du travail dans le cadre de la phase de développement suivante" }
        },
        {
          id: "b",
          text: { en: "Testers should review work products as soon as drafts are available", 
                  fr: "Les testeurs doivent examiner les produits du travail dès que des brouillons sont disponibles" }
        },
        {
          id: "c",
          text: { en: "Testers should review work products before test analysis and design begins", 
                  fr: "Les testeurs doivent examiner les produits du travail avant de commencer l'analyse et la conception des tests" }
        },
        {
          id: "d",
          text: { en: "Testers should review work products immediately after they are published", 
                  fr: "Les testeurs doivent examiner les produits du travail immédiatement après leur publication" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qb11",
      number: 11,
      text: {
        en: "Which of the following is an example of a test-first approach to development?",
        fr: "Laquelle des approches suivantes est un exemple d'une approche de développement basée sur les tests en premier ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Test-Driven Development", 
                fr: "Développement piloté par les tests" }
        },
        {
          id: "b",
          text: { en: "Coverage-Driven Development", 
                  fr: "Développement piloté par la couverture" }
        },
        {
          id: "c",
          text: { en: "Quality-Driven Development", 
                  fr: "Développement piloté par la qualité" }
        },
        {
          id: "d",
          text: { en: "Feature-Driven Development", 
                  fr: "Développement piloté par les fonctionnalités" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qb12",
      number: 12,
      text: {
        en: "Which of the following statements about DevOps is CORRECT?",
        fr: "Laquelle des affirmations suivantes concernant DevOps est CORRECTE ?",
      },
      options: [
        {
          id: "a",
          text: { en: "To speed up releases, continuous integration is used to encourage developers to submit code quickly without the need to complete component testing", 
                fr: "Pour accélérer les versions, l'intégration continue est utilisée pour encourager les développeurs à soumettre du code rapidement sans avoir besoin d'effectuer des tests unitaires" }
        },
        {
          id: "b",
          text: { en: "To be able to update and release systems on a more frequent basis, many automated regression tests are required to reduce the danger of regression", 
                  fr: "Pour pouvoir mettre à jour et publier des systèmes plus fréquemment, de nombreux tests de régression automatisés sont nécessaires afin de réduire le risque de régression" }
        },
        {
          id: "c",
          text: { en: "To treat both developers and operations equally, the testers will allocate more effort to release testing by operations using a shift-right approach", 
                  fr: "Afin de traiter les développeurs et les opérations sur un pied d'égalité, les testeurs consacreront plus d'efforts aux tests de mise en production par les opérations en adoptant une approche 'shift-right'" }
        },
        {
          id: "d",
          text: { en: "To create increased synergy between testers, developers and operations, the testing must become fully automated with no manual testing", 
                  fr: "Pour créer une synergie accrue entre les testeurs, les développeurs et les opérations, les tests doivent être entièrement automatisés, sans aucun test manuel" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qb13",
      number: 13,
      text: {
        en: "Which of the following is MOST likely to be performed as part of system testing?",
        fr: "Laquelle des opérations suivantes est la plus susceptible d'être réalisée dans le cadre d'un test système ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Security testing of a credit management system by an independent test team", 
                fr: "Test de sécurité d'un système de gestion de crédit par une équipe de test indépendante" }
        },
        {
          id: "b",
          text: { en: "Testing the interface of a currency exchange system with an external banking system", 
                  fr: "Test de l'interface d'un système de change de devises avec un système bancaire externe" }
        },
        {
          id: "c",
          text: { en: "Beta testing of a remote learning system by courseware developers", 
                  fr: "Test bêta d'un système d'apprentissage à distance par les développeurs de cours" }
        },
        {
          id: "d",
          text: { en: "Testing interactions between the user interface and database of a human resources system", 
                  fr: "Test des interactions entre l'interface utilisateur et la base de données d'un système de ressources humaines" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qb14",
      number: 14,
      text: {
        en: "Which of the following statements is CORRECT?",
        fr: "Lequel des énoncés suivants concernant les tests logiciels est CORRECTE ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Regression tests increase in number as the project progresses, whereas the number of confirmation tests decreases as the project progresses", 
                fr: "Le nombre de tests de régression augmente à mesure que le projet avance, tandis que le nombre de tests de confirmation diminue." }
        },
        {
          id: "b",
          text: { en: "Regression tests are created and run when the test object is fixed, whereas confirmation tests are run whenever the test object is enhanced", 
                  fr: "Les tests de régression sont créés et exécutés lorsque l'objet du test est corrigé, tandis que les tests de confirmation sont exécutés chaque fois que l'objet du test est amélioré." }
        },
        {
          id: "c",
          text: { en: "Regression testing is concerned with checking that the operational environment remains unchanged, whereas confirmation testing is concerned with testing changes to the test object", 
                  fr: "Les tests de régression visent à vérifier que l'environnement opérationnel reste inchangé, tandis que les tests de confirmation visent à tester les modifications apportées à l'objet du test." }
        },
        {
          id: "d",
          text: { en: "Regression testing is concerned with adverse effects in unchanged code, whereas confirmation testing is concerned with testing changed code", 
                  fr: "Les tests de régression s'intéressent aux effets indésirables dans le code inchangé, tandis que les tests de confirmation s'intéressent aux tests du code modifié." }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "qb15",
      number: 15,
      text: {
        en: "Which of the following is an example of a defect that can be found by static testing but NOT by dynamic testing? ",
        fr: "Lequel des éléments suivants est un exemple de défaut pouvant être trouvé par des tests statiques, mais PAS par des tests dynamiques ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Lack of usability provided through the user interface", 
                fr: "Manque de convivialité de l'interface utilisateur" }
        },
        {
          id: "b",
          text: { en: "Code with no path that reaches it", 
                  fr: "Code avec un chemin qui ne le atteint jamais" }
        },
        {
          id: "c",
          text: { en: "Poor response times for most of the expected users", 
                  fr: "Temps de réponse insuffisants pour la plupart des utilisateurs attendus" }
        },
        {
          id: "d",
          text: { en: "Required features that are not implemented in the code", 
                  fr: "Fonctionnalités requises qui ne sont pas implémentées dans le code" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qb16",
      number: 16,
      text: {
        en: "Which of the following is a benefit of early and frequent stakeholder feedback?",
        fr: "Quel est l'un des avantages d'un feedback précoce et fréquent des parties prenantes ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Managers are aware of which developers are less productive", 
                fr: "Les responsables sont informés des développeurs moins productifs" }
        },
        {
          id: "b",
          text: { en: "It allows project managers to prioritize their stakeholder interactions", 
                  fr: "Cela permet aux chefs de projet de prioriser leurs interactions avec les parties prenantes" }
        },
        {
          id: "c",
          text: { en: "It facilitates early communication of potential quality issues", 
                  fr: "Cela facilite la communication précoce des problèmes de qualité potentiels" }
        },
        {
          id: "d",
          text: { en: "End users better understand why the delivery of the work product is delayed", 
                  fr: "Les utilisateurs finaux comprennent mieux pourquoi la livraison du produit est retardée" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "qb17",
      number: 17,
      text: {
        en: "Given the following task descriptions:",
        fr: "Étant donné les descriptions de tâches suivantes :",
      },
        numerList: {
          en: ["The quality characteristics to be evaluated and the exit criteria are selected", "Everyone has access to the work product", "Anomalies are identified in the work product", "Anomalies are discussed"],
          fr: ["Les caractéristiques de qualité à évaluer et les critères de sortie sont sélectionnés", "Tout le monde a accès au produit de travail", "Des anomalies sont identifiées dans le produit de travail.", "Les anomalies sont discutées"]
        },
      textBetween: {
        en: "And the following review activities",
        fr: "Et les activités de revue suivantes :"
      },
      alphaList: {
        en: ["Individual review", "Review initiation", "Planning", "Communication and analysis"],
        fr: ["Revue individuel", "Lancement de l'examen", "Planification", "Communication et analyse"]
      },
      text3: {
        en: "Which of the following BEST matches the task descriptions and activities?",
        fr: "Laquelle des propositions suivantes correspond le MIEUX aux descriptions de tâches et aux activités ?"
      },
      options: [
        {
          id: "a",
          text: { en: "1B, 2C, 3D, 4A", 
                fr: "1B, 2C, 3D, 4A" }
        },
        {
          id: "b",
          text: { en: "1B, 2D, 3C, 4A", 
                  fr: "1B, 2D, 3C, 4A" }
        },
        {
          id: "c",
          text: { en: "1C, 2A, 3B, 4D", 
                  fr: "1C, 2A, 3B, 4D" }
        },
        {
          id: "d",
          text: { en: "1C, 2B, 3A, 4D", 
                  fr: "1C, 2B, 3A, 4D" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "qb18",
      number: 18,
      text: {
        en: "Given the following roles in reviews:",
        fr: "Étant donné les rôles suivants dans les revues :",
      },
      numerList: {
        en: ["Scribe", "Review leader", "Facilitator", "Manager"],
        fr: ["Scribe", "Responsable de revue", "Facilitateur", "Manager"]
      },
    text2: {
      en: "And the following review activities",
      fr: "Et les responsabilités suivantes dans les revues :"
    },
    alphaList: {
      en: ["Ensures the effective running of review meetings and the setting up a safe review environment", "Records review information, such as decisions and new anomalies found during the review meeting", "Decides what is to be reviewed and provides resources, such as staff and time for the review", "Takes overall responsibility for the review such as organizing when and where the review will take place"],
      fr: ["Garantit le bon déroulement des réunions d'examen et la mise en place d'un environnement d'examen sûr.", "Enregistre les informations relatives à l'examen, telles que les décisions et les nouvelles anomalies trouvées pendant la réunion d'examen.", "Décide de ce qui doit être examiné et fournit des ressources, telles que le personnel et le temps nécessaire à l'examen.", "Assume la responsabilité globale de l'examen, notamment en organisant le lieu et le moment de l'examen."]
    },
    text3: {
      en: "Which of the following BEST matches the roles and responsibilities?",
      fr: "Laquelle des propositions suivantes correspond le MIEUX aux rôles et aux responsabilités ?"
    },
      options: [
        {
          id: "a",
          text: { en: "1A, 2B, 3D, 4C", 
                fr: "1A, 2B, 3D, 4C" }
        },
        {
          id: "b",
          text: { en: "1A, 2C, 3B, 4D", 
                  fr: "1A, 2C, 3B, 4D" }
        },
        {
          id: "c",
          text: { en: "1B, 2D, 3A, 4C", 
                  fr: "1B, 2D, 3A, 4C" }
        },
        {
          id: "d",
          text: { en: "1B, 2D, 3C, 4A", 
                  fr: "1B, 2D, 3C, 4A" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "qb19",
      number: 19,
      text: {
        en: "Which of the following statements BEST describes the difference between decision table testing and branch testing?",
        fr: "Laquelle des affirmations suivantes décrit le MIEUX la différence entre les tests par table de décision et les tests par branche ?",
      },
      options: [
        {
          id: "a",
          text: { en: "In decision table testing, the test cases are derived from the decision statements in the code. In branch testing, the test cases are derived from knowledge of the control flow of the test object", 
                fr: "Dans les tests par table de décision, les cas de test sont dérivés des instructions de décision dans le code. Dans les tests par branche, les cas de test sont dérivés de la connaissance du flux de contrôle de l'objet de test." }
        },
        {
          id: "b",
          text: { en: " In decision table testing, the test cases are derived from the specification that describes the business logic. In branch testing the test cases are based on anticipation of potential defects in the source code.", 
                  fr: "Dans les tests par table de décision, les cas de test sont dérivés de la spécification qui décrit la logique métier. Dans les tests par branche, les cas de test sont basés sur l'anticipation de défauts potentiels dans le code source." }
        },
        {
          id: "c",
          text: { en: "In decision table testing, the test cases are derived from knowledge of the control flow of the test object. In branch testing, test cases are derived from the specification that describes the business logic.", 
                  fr: "Dans les tests par table de décision, les cas de test sont dérivés de la connaissance du flux de contrôle de l'objet de test. Dans les tests par branche, les cas de test sont dérivés de la spécification qui décrit la logique métier." }
        },
        {
          id: "d",
          text: { en: "In decision table testing, the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation of the code", 
                  fr: "Dans les tests par table de décision, les cas de test sont indépendants de la façon dont le logiciel est implémenté. Dans les tests par branche, les cas de test ne peuvent être créés qu'après la conception ou l'implémentation du code." }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "qb20",
      number: 20,
      text: {
        en: "Customers of the TestWash car wash chain have cards with a record of the number of washes they have bought so far. The initial value is 0. After entering the car wash, the system increases the number on the card by one. This value represents the number of the current wash. Based on this number the system decides what discount the customer is entitled to.",
        fr: "Les clients de la chaîne de lavage automobile TestWash possèdent des cartes enregistrant le nombre de lavages qu'ils ont achetés jusqu'à présent. La valeur initiale est 0. Après l'entrée dans le lavage automatique, le système incrémente le numéro sur la carte d'une unité. Cette valeur représente le numéro du lavage en cours. En fonction de ce numéro, le système décide de la remise à laquelle le client a droit.",
      },
      text2: {
        en: "For every tenth wash the system gives a 10% discount, and for every twentieth wash, the system gives a further 40% discount (i.e., a 50% discount in total).",
        fr: "Pour chaque dixième lavage, le système accorde une remise de 10 %, et pour chaque vingtième lavage, le système accorde une remise supplémentaire de 40 % (soit une remise totale de 50 %)."
      },
      text3: {
        en: "Which of the following sets of input data (understood as the numbers of the current wash) achieves the highest equivalence partition coverage?",
        fr: "Lequel des ensembles de données d'entrée suivants (compris comme les numéros du lavage en cours) permet d'atteindre la couverture par partition d'équivalence la plus élevée ?"
      },
      options: [
        {
          id: "a",
          text: { en: "19, 20, 30", 
                fr: "19, 20, 30" }
        },
        {
          id: "b",
          text: { en: " 11, 12, 20", 
                  fr: " 11, 12, 20" }
        },
        {
          id: "c",
          text: { en: "1, 10, 50", 
                  fr: "1, 10, 50" }
        },
        {
          id: "d",
          text: { en: "10, 29, 30, 31", 
                  fr: "10, 29, 30, 31" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qb21",
      number: 21,
      text: {
        en: "Vous testez un formulaire qui vérifie la validité de la longueur du mot de passe saisi. Le formulaire accepte les mots de passe de longueur correcte et rejette ceux qui sont trop courts ou trop longs. La longueur correcte se situe entre 6 et 12 caractères inclus. Sinon, elle est considérée comme incorrecte.",
        fr: "Vous testez un système qui calcule la note finale d'un cours pour un étudiant donné. La note finale est attribuée en fonction du résultat final, selon les règles suivantes :",
      },
      text2: {
        en: "At first, the form is empty (password length = 0). You apply boundary value analysis to the “password length” variable.",
        fr: "Au départ, le formulaire est vide (longueur du mot de passe = 0). Vous appliquez l'analyse des valeurs limites à la variable 'longueur du mot de passe'."
      },
      text3: {
        en: "Your set of test cases achieves 100% 2-value boundary value coverage. The team decided that due to the high risk of this component, test cases should be added to ensure 100% 3-value boundary value coverage. Which additional password lengths should be tested to achieve this?",
        fr: "Votre ensemble de cas de test atteint une couverture de 100 % en analyse des valeurs limites à 2 valeurs. L'équipe a décidé qu'en raison du risque élevé associé à ce composant, des cas de test supplémentaires doivent être ajoutés pour garantir une couverture de 100 % en analyse des valeurs limites à 3 valeurs. Quelles longueurs de mot de passe supplémentaires doivent être testées pour atteindre cet objectif ?"
      },
      options: [
        {
          id: "a",
          text: { en: "4, 5, 13, 14", 
                fr: "4, 5, 13, 14" }
        },
        {
          id: "b",
          text: { en: "7, 11", 
                  fr: "7, 11" }
        },
        {
          id: "c",
          text: { en: " 1, 5, 13", 
                  fr: " 1, 5, 13" }
        },
        {
          id: "d",
          text: { en: "1, 4, 7, 11, 14", 
                  fr: "1, 4, 7, 11, 14" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "qb22",
      number: 22,
      text: {
        en: "The following decision table contains the rules for determining the risk of atherosclerosis.",
        fr: "Le tableau de décision suivant contient les règles de détermination du risque d'athérosclérose.",
      },      
      tableData: {
        headers: {
          en: [" ", "Rule 1", "Rule 2", "Rule 3", "Rule 4", "Rule 5"],
          fr: [" ", "Règle 1", "Règle 2", "Règle 3", "Règle 4", "Règle 5"]
        },
        rows: {
         en:  [["Conditions"],
          ["Cholesterol (mg/dl)", "≤124", "≤124", "125 - 200", "125 - 200", "≥ 201"],
          ["Blood pressure (mm Hg)", "≤ 140", "> 140", "≤ 140", "> 140", "-"],
          ["Action"],
          ["Risk level", "very low", "low", "medium", "high", "very high",]
        ],
          fr: [["Conditions"],
          ["Cholestérol (mg/dl)", "≤124", "≤124", "125 - 200", "125 - 200", "≥ 201"],
          ["pression artérielle (mm Hg)", "≤ 140", "> 140", "≤ 140", "> 140", "-"],
          ["Action"],
          ["Niveau de risque", "très faible", "faible", "moyen", "élevé", "très élevé",]
        ]
        }
      },
      text3 : {
        en: "You designed the test cases with the following test input data",
        fr: "Vous avez conçu des cas de test avec les données d'entrée suivantes :"
      },
      cells: {
        en: [
          ["TC1:", "Cholesterol = 125 mg/dl", "Blood pressure = 141 mm Hg"],
          ["TC2:", "Cholesterol = 200 mg/d", "Blood pressure = 201 mm Hg"],
          ["TC3:", "Cholesterol = 124 mg/d", "Blood pressure = 201 mm Hg"],
          ["TC4:", "Cholesterol = 109 mg/d", "Blood pressure = 200 mm Hg"],
          ["TC5:", "Cholesterol = 201 mg/d", "Blood pressure = 140 mm Hg"],
        ],
        fr: [
          ["CT1:", "Cholestérol = 125 mg/dl", "pression artérielle = 141 mm Hg"],
          ["CT2:", "Cholestérol = 200 mg/d", "pression artérielle = 201 mm Hg"],
          ["CT3:", "Cholestérol = 124 mg/d", "pression artérielle = 201 mm Hg"],
          ["CT4:", "Cholestérol = 109 mg/d", "pression artérielle = 200 mm Hg"],
          ["CT5:", "Cholestérol = 201 mg/d", "pression artérielle = 140 mm Hg"],
        ]
      },
      text4: {
        en: "What is the decision table coverage achieved by these test cases?",
        fr: "Quel est le taux de couverture du tableau de décision atteint par ces cas de test ?"
      },
      options: [
        {
          id: "a",
          text: { en: "40%", 
                fr: "40%" }
        },
        {
          id: "b",
          text: { en: " 60%", 
                  fr: " 60%" }
        },
        {
          id: "c",
          text: { en: "80%", 
                  fr: "80%" }
        },
        {
          id: "d",
          text: { en: "100%", 
                  fr: "100%" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qb23",
      number: 23,
      text: {
        en: "A storage system can store up to three elements and is modeled by the following state transition diagram. The variable N represents the number of currently stored elements.",
        fr: "Un système de stockage peut contenir jusqu'à trois éléments et est modélisé par le diagramme d'état de transition suivant . La variable N représente le nombre d'éléments actuellement stockés.",
      },
      image: "./src/images/Exqm B q23.drawio.png",
      imageAlt: {
        en: "State Transition exam b question 23",
        fr: "Etat de Transtion examen B question 23"
      },
      text2: {
        en: "Which of the following test cases, represented as sequences of events, achieves the highest level of valid transitions coverage?",
        fr: "Parmi les séquences d'événements suivantes représentant des cas de test, laquelle permet d'atteindre le niveau de couverture des transitions valides le plus élevé ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Add, Remove, Add, Add, Add", 
                fr: "Add, Remove, Add, Add, Add" }
        },
        {
          id: "b",
          text: { en: "Add, Add, Add, Add, Remove, Remove", 
                  fr: "Add, Add, Add, Add, Remove, Remove" }
        },
        {
          id: "c",
          text: { en: "Add, Add, Add, Remove, Remove", 
                  fr: "Add, Add, Add, Remove, Remove" }
        },
        {
          id: "d",
          text: { en: "Add, Add, Add, Remove, Add", 
                  fr: "Add, Add, Add, Remove, Add" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "qb24",
      number: 24,
      text: {
        en: "You run two test cases, T1 and T2, on the same code. Test T1 achieved 40% statement coverage and test T2 achieved 65% statement coverage.",
        fr: "Vous exécutez deux cas de test, T1 et T2, sur le même code. Le test T1 atteint une couverture d'instructions de 40 % et le test T2 atteint une couverture d'instructions de 65 %.",
      },
      text2 : {
        en: "Which of the following sentences must be necessarily true?",
        fr: "Laquelle des phrases suivantes est nécessairement vraie ?"
      },
      options: [
        {
          id: "a",
          text: { en: "The test suite composed with tests T1 and T2 achieves 105% statement coverage", 
                fr: "La suite de tests composée des tests T1 et T2 atteint une couverture d'instructions de 105 %." }
        },
        {
          id: "b",
          text: { en: "There exists at least one statement that must have been executed by both T1 and T2", 
                  fr: "Il existe au moins une instruction qui a dû être exécutée à la fois par T1 et T2." }
        },
        {
          id: "c",
          text: { en: " At least 5% of the statements in the code under test are non-executable", 
                  fr: "Au moins 5 % des instructions du code testé sont non-exécutables." }
        },
        {
          id: "d",
          text: { en: "The test suite composed of tests T1 and T2 achieves full branch coverage", 
                  fr: "La suite de tests composée des tests T1 et T2 atteint une couverture complète des branches." }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qb25",
      number: 25,
      text: {
        en: "Let the branch coverage metric be defined as BCov = (X / Y) * 100%.\nWhat do X and Y represent in this formula?",
        fr: "Définissons la mesure de la couverture des branches comme suit : BCov = (X / Y) * 100 %. \nQue représentent X et Y dans cette formule ?",
      },
      options: [
        {
          id: "a",
          text: { en: "X = number of decision outcomes exercised by the test cases\nY = total number of decision outcomes in the code", 
                fr: "X = nombre de résultats de décision exercés par les cas de test \nY = nombre total de résultats de décision dans le code" }
        },
        {
          id: "b",
          text: { en: "X = number of conditional branches exercised by the test cases\nY = total number of branches in the code", 
                  fr: "X = nombre de branches conditionnelles exercées par les cas de test \nY = nombre total de branches dans le code" }
        },
        {
          id: "c",
          text: { en: "X = number of branches exercised by the test cases\nY = total number of branches in the code", 
                  fr: "X = nombre de branches exercées par les cas de test \nY = nombre total de branches dans le code" }
        },
        {
          id: "d",
          text: { en: "X = number of conditional branches exercised by the test cases\nY = total number of decision outcomes in the code", 
                  fr: "X = nombre de branches conditionnelles exercées par les cas de test \nY = nombre total de résultats de décision dans le code" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "qb26",
      number: 26,
      text: {
        en: "Which TWO of the following statements provide the BEST rationale for using exploratory testing?",
        fr: "Le choix de deux des énoncés suivants fournit la MEILLEURE justification de l'utilisation des tests exploratoires :",
      },
      options: [
        {
          id: "a",
          text: { en: "Testers have not been allocated enough time for test design and test execution", 
                fr: "On n'a pas alloué assez de temps aux testeurs pour la conception et l'exécution des tests." }
        },
        {
          id: "b",
          text: { en: "The existing test strategy requires that testers use formal, black-box test techniques", 
                  fr: "La stratégie de test existante exige que les testeurs utilisent des techniques de test formelles en boîte noire." }
        },
        {
          id: "c",
          text: { en: "The specification is written in a formal language that can be processed by a tool", 
                  fr: "Les spécifications sont rédigées dans un langage formel pouvant être traité par un outil." }
        },
        {
          id: "d",
          text: { en: "Testers are the members of an agile team and have good programming skills", 
                  fr: "Les testeurs sont membres d'une équipe agile et possèdent de bonnes compétences en programmation." }
        },
        {
          id: "e",
          text: { en: "Testers are experienced in the business domain and have good analytical skills", 
                  fr: "Les testeurs sont expérimentés dans le domaine d'activité et possèdent de bonnes compétences analytiques." }
        }
      ],
      correctAnswers: ["a", "e"],
      multipleAnswers: true
    },
    {
      id: "qb27",
      number: 27,
      text: {
        en: "Which of the following BEST fits as an element of the checklist used in checklist-based testing?",
        fr: "Laquelle des options suivantes convient LE MIEUX comme élément d'une checklist utilisée dans les tests basés sur une checklist ?",
      },
      options: [
        {
          id: "a",
          text: { en: "“The developer made an error when implementing the code”", 
                fr: "« Le développeur a commis une erreur lors de l'implémentation du code »" }
        },
        {
          id: "b",
          text: { en: "“The achieved statement coverage exceeds 85%”", 
                  fr: "« La couverture d'instructions atteinte dépasse 85% »" }
        },
        {
          id: "c",
          text: { en: " “The program works correctly regarding functional and non-functional requirements”", 
                  fr: "« Le programme fonctionne correctement par rapport aux exigences fonctionnelles et non fonctionnelles »" }
        },
        {
          id: "d",
          text: { en: "“The error messages are written in language that the user can understand”", 
                  fr: "« Les messages d'erreur sont rédigés dans un langage compréhensible par l'utilisateur »" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "qb28",
      number: 28,
      text: {
        en: "Consider the following acceptance criteria for a user story written from the perspective of an online store owner",
        fr: "Considérez les critères d'acceptation suivants pour une user story, écrits du point de vue du propriétaire d'une boutique en ligne :",
      },
      monospace: {
        en: "Given that the user is logged in and on the homepage, \nWhen the user clicks on the 'Add Item' button, \nThen the 'Create Item' form should appear, \nAnd the user should be able to input a name and price for the new item.",
        fr: "Étant donné que l'utilisateur est connecté et se trouve sur la page d'accueil,\nLorsque l'utilisateur clique sur le bouton 'Ajouter un article',\nAlors le formulaire 'Créer un article' devrait apparaître,\nEt l'utilisateur devrait pouvoir saisir un nom et un prix pour le nouvel article."
      },
      textRe: {
        en: "In what format is this acceptance criteria written?",
        fr: "Dans quel format ces critères d'acceptation sont-ils rédigés ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Rule-oriented", 
                fr: "Basé sur des règles" }
        },
        {
          id: "b",
          text: { en: "Scenario-oriented", 
                  fr: "Basé sur des scénarios" }
        },
        {
          id: "c",
          text: { en: "Product-oriented", 
                  fr: "Basé sur le produit" }
        },
        {
          id: "d",
          text: { en: "Process-oriented", 
                  fr: "Basé sur le processus" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qb29",
      number: 29,
      text: {
        en: "Your team analyzes the following user story in order to define the acceptance criteria: ",
        fr: "Votre équipe analyse le user story suivant afin de définir les critères d'acceptation :"
      },
      italic: {
        en: "As a registered customer, I want to be able to view my previous orders on the company's website, so that I can keep track of my purchases.",
        fr: "En tant que client enregistré, je souhaite pouvoir consulter mes commandes précédentes sur le site Web de l'entreprise, afin de pouvoir suivre mes achats."
      },
      textRe: {
        en: "Which of the following test cases will <b>NOT</b> be relevant for this user story?",
        fr: "Lequel des cas de test suivants NE SERA PAS pertinent pour ce user story ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Input: the customer logs into their account on the website and clicks the “see order history” button \nExpected output: the system shows a list of all the customer's previous orders, including the date, order number, and total cost", 
                fr: "Entrée : le client se connecte à son compte sur le site Web et clique sur le bouton « voir l'historique des commandes » \nSortie attendue : le système affiche une liste de toutes les commandes précédentes du client, y compris la date, le numéro de commande et le coût total" }
        },
        {
          id: "b",
          text: { en: "Input: the customer clicks on an order from the order list \nExpected output: the system displays the individual items purchased, along with their prices and quantities", 
                  fr: "Entrée : le client clique sur une commande dans la liste des commandes \nSortie attendue : le système affiche les articles individuels achetés, ainsi que leurs prix et quantités" }
        },
        {
          id: "c",
          text: { en: "Input: the customer clicks “Sort ascending” button on the order history screen \nExpected output: the system shows the order history sorted by order number in ascending order", 
                  fr: "Entrée : le client clique sur le bouton « Trier par ordre croissant » sur l'écran de l'historique des commandes \nSortie attendue : le système affiche l'historique des commandes trié par numéro de commande par ordre croissant" }
        },
        {
          id: "d",
          text: { en: "Input: an unregistered customer registers as a new customer with a valid e-mail address that does not already exist in the customer database \nExpected output: the system accepts the registration and creates the account", 
                  fr: "Entrée : un client non enregistré s'enregistre en tant que nouveau client avec une adresse e-mail valide qui n'existe pas déjà dans la base de données client \nSortie attendue : le système accepte l'inscription et crée le compte" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "qb30",
      number: 30,
      text: {
        en: "Your team follows the process that uses the DevOps delivery pipeline. The first three steps of this process are:",
        fr: "Votre équipe suit le processus qui utilise le pipeline de livraison DevOps. Les trois premières étapes de ce processus sont les suivantes :"
      },
      numerList: {
        en: ["Code development", "Submit code into a version control system and merge it into the “test” branch", "Perform component testing for the submitted code"],
        fr: ["Développement du code", "Soumettre le code dans un système de contrôle de version et le fusionner dans la branche « test »", "Effectuer des tests unitaires pour le code soumis"]
      },
      text2: {
        en: "Which of the following is BEST suited to be the entry criterion for step (2) of this pipeline?",
        fr: "Laquelle des options suivantes est la MIEUX adaptée pour être le critère d'entrée de l'étape (2) de ce pipeline ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Static analysis returns no high severity warnings for the submitted code", 
                fr: "L'analyse statique ne renvoie aucun avertissement de haute gravité pour le code soumis" }
        },
        {
          id: "b",
          text: { en: "System version control reports no conflicts when merging code into the “test” branch", 
                  fr: "Le contrôle de version du système ne signale aucun conflit lors de la fusion du code dans la branche « test »" }
        },
        {
          id: "c",
          text: { en: "Component tests are compiled and ready to be executed", 
                  fr: "Les tests unitaires sont compilés et prêts à être exécutés" }
        },
        {
          id: "d",
          text: { en: "Statement coverage is at least 80%", 
                  fr: "La couverture d'instructions est d'au moins 80%" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qb31",
      number: 31,
      text: {
        en: "You want to estimate the test effort for the new project using estimation based on ratios. You calculate the test-to-development effort ratio using averaged data for both development effort and test effort from four historical projects similar to the new one. The table shows this historical data.",
        fr: "Vous souhaitez estimer l'effort de test pour le nouveau projet en utilisant une estimation basée sur des ratios. Vous calculez le ratio effort de test / effort de développement en utilisant les données moyennes de l'effort de développement et de l'effort de test de quatre projets historiques similaires au nouveau projet. Le tableau illustre ces données historiques."
      },
      tableData: {
        headers: {
          en: ["Project", "Development Effort ($)", "Test Effort ($)"],
          fr: ["projet", "Effort de développement ($)", "Effort de test ($)"]
        },
        rows: {
          en: [
            ["P1", "800,000", "40,000"],
            ["P2", "1,200,000", "130,000"],
            ["P3", "600,000", "70,000"],
            ["P4", "1,000,000", "120,000"],
          ],
          fr: [
            ["P1", "800,000", "40,000"],
            ["P2", "1,200,000", "130,000"],
            ["P3", "600,000", "70,000"],
            ["P4", "1,000,000", "120,000"],
          ]
        },
      },
      text3: {
        en: "The estimated development effort for the new project is $800,000. What is your estimate of the test effort in this project?",
        fr: "L'effort de développement estimé pour le nouveau projet est de 800 000 $. Quelle est votre estimation de l'effort de test pour ce projet ?"
      },
      options: [
        {
          id: "a",
          text: { en: "$40,000", 
                fr: "$40,000" }
        },
        {
          id: "b",
          text: { en: "$80,000", 
                  fr: "$80,000" }
        },
        {
          id: "c",
          text: { en: "$81,250", 
                  fr: "$81,250" }
        },
        {
          id: "d",
          text: { en: "$82,500", 
                  fr: "$82,500" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qb32",
      number: 32,
      text: {
        en: "You are testing a web application that allows users to SEARCH for products, VIEW product details, ADD products to a shopping cart, and place an ORDER. \nYou have prepared the following seven test cases, all of which you want to execute. The tests should be executed in the best order, based on test priority.",
        fr: "Vous testez une application web qui permet aux utilisateurs de RECHERCHER des produits, AFFICHER les détails des produits, AJOUTER des produits à un panier et passer une COMMANDE.\nVous avez préparé les cinq cas de test suivants, que vous souhaitez exécuter en fonction de leurs priorités :"
      },
      tableData: {
        headers: {
          en: ["", "Test", "Priority  (1 = higher priority)"],
          fr: ["", "Test", "Priorité  (1 = priorité plus élevée)"],
        },
        rows: {
          en: [
            ["TC1", "SEARCH for product A", "4"],
            ["TC2", "SEARCH for product B", "4"],
            ["TC3", "VIEW product A details", "3"],
            ["TC4", "VIEW product B details", "2"],
            ["TC5", "ADD product A to a shopping cart", "3"],
            ["TC6", "ADD product B to a shopping cart", "1"],
            ["TC7", "place an ORDER", "5"],
          ],
          fr: [
            ["CT1", "RECHERCHER le produit A ", "4"],
            ["CT2", "AFFICHER les détails du produit A", "4"],
            ["CT3", "VOIR les détails du produit A", "3"],
            ["CT4", "VOIR les détails du produit B", "2"],
            ["CT5", "AJOUTER le produit A à un panier", "3"],
            ["CT6", "AJOUTER le produit B à un panier", "1"],
            ["CT7", "passer une COMMANDE", "5"],
          ]
        },
      },
      text3: {
        en: "You also identified the following logical dependencies between test cases:",
        fr: "Vous avez également identifié les dépendances logiques suivantes entre les cas de test :",
      },
      list :{
        en: ["SEARCH functionality must be tested before VIEW functionality can be tested", "VIEW functionality must be tested before ADD functionality.", "ADD functionality must be tested before ORDER functionality."],
        fr: ["La fonctionnalité de RECHERCHE doit être testée avant la fonctionnalité d'AFFICHAGE", "La fonctionnalité d'AFFICHAGE doit être testée avant la fonctionnalité d'AJOUT", "La fonctionnalité d'AJOUT doit être testée avant la fonctionnalité de COMMANDE"]
      },
      text4: {
        en:"Which test case should be executed as the fourth one?",
        fr:"Quel est le quatrième cas de test à exécuter ?"
      },
      options: [
        {
          id: "a",
          text: { en: "TC3", 
                fr: "CT3" }
        },
        {
          id: "b",
          text: { en: "TC1", 
                  fr: "CT1" }
        },
        {
          id: "c",
          text: { en: "TC7", 
                  fr: "CT7" }
        },
        {
          id: "d",
          text: { en: "TC2", 
                  fr: "CT2" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qb33",
      number: 33,
      text: {
        en: "According to the testing quadrants model, which of the following falls into quadrant Q1 (“technology facing” and “support the team”)?",
        fr: "Selon le modèle des quadrants de test, lequel des éléments suivants appartient au quadrant Q1 (« orienté technologie » et « support à l'équipe ») ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Usability testing", 
                fr: "Test d'utilisabilité" }
        },
        {
          id: "b",
          text: { en: "Functional testing", 
                  fr: "Test fonctionnel" }
        },
        {
          id: "c",
          text: { en: "User acceptance testing", 
                  fr: "Test d'acceptation utilisateur" }
        },
        {
          id: "d",
          text: { en: "Component integration testing", 
                  fr: "Test d'intégration de composants" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    }, 
    {
      id: "qb34",
      number: 34,
      text: {
        en: "Given the following risks:",
        fr: "On vous présente les risques suivants :"
      },
      numerList :{
        en: ["Ineffective loop implementation causes long system responses", "Consumers change their preferences", "Flooding of the server room", "Patients above a certain age receive inaccurate reports"],
        fr: ["Une implémentation inefficace de boucle entraîne des temps de réponse système longs", "Les préférences des consommateurs changent", "Inondation de la salle des serveurs", "Les patients d'un certain âge reçoivent des rapports inexacts"]
      },
      textBetween: {
        en: "And the following mitigation activities:",
        fr: "Et les activités d'atténuation suivantes :"
      },
      alphaList: {
        en: ["Risk acceptance", "Performance testing", "Using boundary value analysis as the test technique", "Risk transfer"],
        fr: ["Acceptation du risque", "Tests de performance", "Utilisation de l'analyse des valeurs limites comme technique de test", "Transfert de risque"]
      },
      text3: {
        en:"Which of the following BEST matches the risks with the mitigation activities?",
        fr:"Laquelle des options suivantes associe LE MIEUX les risques aux activités d'atténuation ?"
      },
      options: [
        {
          id: "a",
          text: { en: "1C, 2D, 3A, 4B", 
                fr: "1C, 2D, 3A, 4B" }
        },
        {
          id: "b",
          text: { en: "1B, 2D, 3A, 4C", 
                  fr: "1B, 2D, 3A, 4C" }
        },
        {
          id: "c",
          text: { en: "1B, 2A, 3D, 4C", 
                  fr: "1B, 2A, 3D, 4C" }
        },
        {
          id: "d",
          text: { en: " 1C, 2A, 3D, 4B", 
                  fr: " 1C, 2A, 3D, 4B" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "qb35",
      number: 35,
      text: {
        en: "Which of the following is a product quality metric?",
        fr: "Laquelle des options suivantes est une mesure de la qualité du produit ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Mean time to failure", 
                fr: "Temps moyen entre les panne" }
        },
        {
          id: "b",
          text: { en: "Number of defects found", 
                  fr: "Nombre de défauts trouvés" }
        },
        {
          id: "c",
          text: { en: "Requirements coverage", 
                  fr: "Couverture des exigences" }
        },
        {
          id: "d",
          text: { en: "Defect detection percentage",  
                  fr: "Pourcentage de détection des défauts" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qb36",
      number: 36,
      text: {
        en: "You are a member of a test team located in North America, developing a product for a client located in Europe. The team is agile and follows the DevOps approach and uses a continuous integration/continuous delivery pipeline.",
        fr: "Vous faites partie d'une équipe de test située en Amérique du Nord et développez un produit pour un client situé en Europe. L'équipe est agile, suit l'approche DevOps et utilise un pipeline d'intégration continue/livraison continue."
      },
      text2: {
        en: "Which of the following is the LEAST effective way to communicate test progress to the customer?",
        fr: "Laquelle des méthodes suivantes est la MOINS efficace pour communiquer l'avancement des tests au client ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Face-to-face", 
                fr: "En face à face" }
        },
        {
          id: "b",
          text: { en: "Dashboards", 
                  fr: "Tableaux de bord" }
        },
        {
          id: "c",
          text: { en: "Email", 
                  fr: "Courriel" }
        },
        {
          id: "d",
          text: { en: "Video conferencing",  
                  fr: "Visioconférence" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qb37",
      number: 37,
      text: {
        en: "Which of the following BEST describes an example of how configuration management (CM) supports testing?",
        fr: "Laquelle des options suivantes décrit le MIEUX un exemple de la façon dont la gestion des configurations (GC) soutient les tests ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Having the version number of the environment, the CM tool can retrieve the version numbers of libraries, stubs and drivers used in that environment", 
                fr: "En ayant le numéro de version de l'environnement, l'outil CM peut récupérer les numéros de version des bibliothèques, des stubs et des pilotes utilisés dans cet environnement" }
        },
        {
          id: "b",
          text: { en: "Having a record of the values of the test inputs, the CM tool can execute the test cases for these configurations and calculate test coverage", 
                  fr: "En ayant un enregistrement des valeurs des entrées de test, l'outil CM peut exécuter les cas de test pour ces configurations et calculer la couverture de test" }
        },
        {
          id: "c",
          text: { en: " Having data about the date of purchase of a software license, the CM tool automatically generates information about the fact that the product license is coming to an end ", 
                  fr: "En ayant des données sur la date d'achat d'une licence logicielle, l'outil CM génère automatiquement des informations sur l'expiration de la licence du produit" }
        },
        {
          id: "d",
          text: { en: "Having the version number of the test case, the CM tool can automatically generate test data for this test case",  
                  fr: "En ayant le numéro de version du cas de test, l'outil CM peut automatiquement générer des données de test pour ce cas de test" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qb38",
      number: 38,
      text: {
        en: "You are testing a sort function that gets a set of numbers as input and returns the same set of numbers sorted in ascending order. The log from the test execution looks as follows",
        fr: "Vous testez une fonction de tri qui reçoit un ensemble de nombres en entrée et renvoie le même ensemble de nombres triés par ordre croissant. nombres triés par ordre croissant. Le journal de l'exécution du test se présente comme suit."
      },
      image: "./src/images/Log exam B question 38.jpg",
      imageAlt: {
        en: "Log exam B question 38",
        fr: "Log examen B question 38"
      },
      text2: {
        en: "Which of the following provides the BEST description of the failure that can be used in a defect report? ",
        fr: "Laquelle des options suivantes décrit le MIEUX un exemple de la façon dont la gestion des configurations (CM) prend en charge les tests ?"
      },
      options: [
        {
          id: "a",
          text: { en: "The system fails to sort several sets of numbers. Reference: TC3, TC4, TC5.", 
                fr: "Le système ne parvient pas à trier plusieurs séries de chiffres. Référence : TC3, TC4, TC5." }
        },
        {
          id: "b",
          text: { en: "The system seems to disregard duplicates while sorting. Reference: TC3, TC4, TC5", 
                  fr: "Le système semble ignorer les doublons lors du tri. Référence : TC3, TC4, TC5 :" }
        },
        {
          id: "c",
          text: { en: "The system fails to sort negative numbers. Reference: TC4, TC5", 
                  fr: "Le système ne trie pas les nombres négatifs : TC4, TC5." }
        },
        {
          id: "d",
          text: { en: "TC3, TC4 and TC5 have defects (duplicate input data) and should be corrected.",  
                  fr: "TC3, TC4 et TC5 présentent des défauts (données d'entrée dupliquées) et doivent être corrigés." }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qb39",
      number: 39,
      text: {
        en: "Given the following descriptions:",
        fr: "On vous présente les descriptions suivantes :"
      },
      numerList: {
        en: ["Support workflow tracking", "Facilitate communication", "Virtual machines", "Support reviews"],
        fr: ["Soutenir le suivi du workflow", "Faciliter la communication", "Machines virtuelles", "Soutenir les revues"]
      },
      textBetween: {
        en: "And the following test tool categories:",
        fr: "Et les catégories d'outils de test suivantes :"
      },
      alphaList: {
        en: ["Static testing tools", "Tools supporting scalability and deployment standardization", "DevOps tools", "Collaboration tools"],
        fr: ["Outils de test statique", "Outils supportant l'évolutivité et la standardisation du déploiement", "Outils DevOps", "Outils de collaboration"],
      },
      text4: {
        en: "Which of the following BEST matches the descriptions and categories?",
        fr: "Laquelle des options suivantes associe LE MIEUX les descriptions et les catégories ?"
      },
      options: [
        {
          id: "a",
          text: { en: "1A, 2B, 3C, 4D", 
                fr: "1A, 2B, 3C, 4D" }
        },
        {
          id: "b",
          text: { en: "1B, 2D, 3C, 4A", 
                  fr: "1B, 2D, 3C, 4A" }
        },
        {
          id: "c",
          text: { en: "1C, 2D, 3B, 4A", 
                  fr: "1C, 2D, 3B, 4A" }
        },
        {
          id: "d",
          text: { en: "1D, 2C, 3A, 4B",  
                  fr: "1D, 2C, 3A, 4B" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "qb40",
      number: 40,
      text: {
        en: "Which of the following is MOST likely to be a benefit of test automation?",
        fr: "Laquelle des options suivantes est le PLUS susceptible d'être un avantage de l'automatisation des tests ?"
      },
      options: [
        {
          id: "a",
          text: { en: "It may introduce unknown regressions in production", 
                fr: "Elle fournit des mesures de couverture trop complexes à dériver pour les humains" }
        },
        {
          id: "b",
          text: { en: "It shares responsibility for the testing with the tool vendor", 
                  fr: "Elle partage la responsabilité des tests avec le fournisseur de l'outil" }
        },
        {
          id: "c",
          text: { en: "It removes the need for critical thinking when analyzing test results ", 
                  fr: "Elle supprime le besoin de pensée critique lors de l'analyse des résultats des tests" }
        },
        {
          id: "d",
          text: { en: "It generates test cases from an analysis of the program code",  
                  fr: "Elle génère des cas de test à partir d'une analyse du code du programme" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    }
  ]
}


//////////////////////////////////////////////////////////////////////////////////


export const sampleExamC = {
  id: "exam-c",
  title: {
    en: "Sample Exam C",
    fr: "Examen C d'exemple"
  },
  timeLimit: 30, // time in minutes
  questions: [
    {
      id: "qc1",
      number: 1,
      text: {
        en: "Which of the following is a typical test objective?",
        fr: "Laquelle des options suivantes est un objectif de test typique ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Validating that documented requirements are met", 
                fr: "Valider que les exigences documentées sont respectées" }
        },
        {
          id: "b",
          text: { en: "Causing failures and identifying defects", 
                  fr: "Provoquer des pannes et identifier les défauts" }
        },
        {
          id: "c",
          text: { en: "Initiating errors and identifying root causes", 
                  fr: "Initier des erreurs et identifier les causes racines" }
        },
        {
          id: "d",
          text: { en: "Verifying the test object meets user expectations", 
                  fr: "Vérifier que l'objet de test répond aux attentes des utilisateurs" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qc2",
      number: 2,
      text: {
        en: "Which of the following statements BEST describes the difference between testing and debugging?",
        fr: "Laquelle des affirmations suivantes décrit le MIEUX la différence entre les tests et le débogage ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Testing causes failures while debugging fixes failures", 
                fr: "Les tests provoquent des pannes alors que le débogage corrige les pannes" }
        },
        {
          id: "b",
          text: { en: "Testing is a negative activity while debugging is a positive activity", 
                  fr: "Les tests sont une activité négative alors que le débogage est une activité positive" }
        },
        {
          id: "c",
          text: { en: "Testing determines that defects exist while debugging removes defects", 
                  fr: "Les tests déterminent l'existence de défauts tandis que le débogage supprime les défauts" }
        },
        {
          id: "d",
          text: { en: "Testing finds the cause of defects while debugging fixes the cause of defects", 
                  fr: "Les tests trouvent la cause des défauts tandis que le débogage corrige la cause des défauts" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "qc3",
      number: 3,
      text: {
        en: "The 'absence-of-defects fallacy' is one of the principles of testing. Which of the following is an example of addressing this principle in practice?",
        fr: "Le « L'illusion de l'absence de défauts » est l'un des principes du test logiciel. Lequel des éléments suivants illustre la mise en pratique de ce principe ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Explaining that it is not possible for testing to show the absence of defects", 
                fr: "Expliquer qu'il est impossible pour les tests de démontrer l'absence de défauts" }
        },
        {
          id: "b",
          text: { en: "Supporting the end users to perform acceptance testing", 
                  fr: "Aider les utilisateurs finaux à effectuer des tests d'acceptation" }
        },
        {
          id: "c",
          text: { en: "Ensuring that no implementation defects remain in the delivered system", 
                  fr: "S'assurer qu'aucun défaut d'implémentation ne subsiste dans le système livré" }
        },
        {
          id: "d",
          text: { en: "Modifying tests that cause no failures to ensure few defects remain", 
                  fr: "Modifier les tests qui ne provoquent pas d'échecs pour garantir qu'il reste peu de défauts" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qc4",
      number: 4,
      text: {
        en: "Which of the following test activities are MOST likely to involve the application of boundary value analysis and equivalence partitioning?",
        fr: "Laquelle des activités de test suivantes est la PLUS susceptible d'impliquer l'application de l'analyse des valeurs limites et du partitionnement d'équivalence ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Test implementation", 
                fr: "Implémentation des tests" }
        },
        {
          id: "b",
          text: { en: "Test design", 
                  fr: "Conception des tests" }
        },
        {
          id: "c",
          text: { en: "Test execution", 
                  fr: "Exécution des tests" }
        },
        {
          id: "d",
          text: { en: "Test monitoring", 
                  fr: "Supervision des tests" }
        },
        {
          id: "e",
          text: {
            en: "Test analysis",
            fr: "Analyse des tests"
          }
        }
      ],
      correctAnswers: ["b", "e"],
      multipleAnswers: true
    },
    {
      id: "qc5",
      number: 5,
      text: {
        en: "Given the following testware:",
        fr: "Étant donné les éléments de testware suivants :",
      },
      numerList: {
        en: ["Coverage items", "Change requests", "Test execution schedule", "Prioritized test conditions"],
        fr: ["Éléments de couverture", "Demandes de changement", "Calendrier d'exécution des tests", "Conditions de test priorisées"]
      },
      textBetween: {
        en: "And the following test activities",
        fr: "Et les activités de test suivantes :"
      },
      alphaList: {
        en: ["Test analysis", "Test design", "Test implementation", "Test completion"],
        fr: ["Analyse des tests", "Conception des tests", "Implémentation des tests", "Achèvement des tests"]
      },
      text4: {
        en: "Which of the following BEST shows the testware produced by the activities?",
        fr: "Laquelle des options suivantes montre le MEILLEUX le testware produit par les activités ?"
      },
      options: [
        {
          id: "a",
          text: { en: "1B, 2D, 3C, 4A", 
                fr: "1B, 2D, 3C, 4A" }
        },
        {
          id: "b",
          text: { en: "1B, 2D, 3A, 4C", 
                  fr: "1B, 2D, 3A, 4C" }
        },
        {
          id: "c",
          text: { en: "1D, 2C, 3A, 4B", 
                  fr: "1D, 2C, 3A, 4B" }
        },
        {
          id: "d",
          text: { en: "1D, 2C, 3B, 4A", 
                  fr: "1D, 2C, 3B, 4A" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qc6",
      number: 6,
      text: {
        en: "Which of the following statements about the different testing roles is MOST likely to be CORRECT?",
        fr: "Laquelle des affirmations suivantes concernant les différents rôles de test est la PLUS susceptible d'être CORRECTE ?",
      },
      options: [
        {
          id: "a",
          text: { en: "In Agile software development, the test management role is the primary responsibility of the team, while the testing role is primarily the responsibility of a single individual from outside the team", 
                fr: "Dans le développement logiciel Agile, le rôle de responsable des tests est la responsabilité principale de l'équipe, tandis que le rôle de testeur est principalement la responsabilité d'un seul individu extérieur à l'équipe" }
        },
        {
          id: "b",
          text: { en: "The testing role is primarily responsible for test monitoring and control, while the test management role is primarily responsible for test planning and test completion", 
                  fr: "Le rôle de testeur est principalement responsable du suivi et du contrôle des tests, tandis que le rôle de responsable des tests est principalement responsable de la planification et de la réalisation des tests" }
        },
        {
          id: "c",
          text: { en: " In Agile software development, test management activities that span multiple teams are handled by a test manager outside the team, while some test management tasks are handled by the team itself", 
                  fr: "Dans le développement logiciel Agile, les activités de gestion des tests qui s'étendent à plusieurs équipes sont gérées par un responsable des tests externe à l'équipe, tandis que certaines tâches de gestion des tests sont prises en charge par l'équipe elle-même" }
        },
        {
          id: "d",
          text: { en: "The test management role is primarily responsible for test analysis and test design, while the testing role is primarily responsible for test implementation and execution ", 
                  fr: "Le rôle de responsable des tests est principalement responsable de l'analyse et de la conception des tests, tandis que le rôle de testeur est principalement responsable de la mise en œuvre et de l'exécution des tests" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "qc7",
      number: 7,
      text: {
        en: "Which of the following is an advantage of the whole-team approach?",
        fr: "Laquelle des options suivantes est un avantage de l'approche par équipe entière ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Teams with no testers", 
                fr: "Des équipes sans testeurs" }
        },
        {
          id: "b",
          text: { en: "Improved team dynamics", 
                  fr: "Une meilleure dynamique d'équipe" }
        },
        {
          id: "c",
          text: { en: "Specialist team members", 
                  fr: "Des membres d'équipe spécialisés" }
        },
        {
          id: "d",
          text: { en: "Larger team sizes", 
                  fr: "Des équipes de plus grande taille" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qc8",
      number: 8,
      text: {
        en: "Which of the following statements about the independence of testing is CORRECT?",
        fr: "Laquelle des affirmations suivantes concernant l'indépendance des tests est CORRECTE ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Independent testers will find defects due to their different technical perspective from developers, but their independence may lead to an adversarial relationship with the developers", 
                fr: "Les testeurs indépendants trouveront des défauts en raison de leur perspective technique différente de celle des développeurs, mais leur indépendance peut conduire à une relation conflictuelle avec les développeurs" }
        },
        {
          id: "b",
          text: { en: "Developers' familiarity with their own code means they only find a few defects in it, however their shared software background with testers means these defects would also be found by the testers", 
                  fr: "La familiarité des développeurs avec leur propre code signifie qu'ils ne trouvent que peu de défauts, mais leur expérience logicielle commune avec les testeurs signifie que ces défauts seraient également trouvés par les testeurs" }
        },
        {
          id: "c",
          text: { en: "Independent testing requires testers who are outside the developer's team and ideally from outside the organization, however these testers find it difficult to understand the application domain", 
                  fr: "Les tests indépendants nécessitent des testeurs qui ne font pas partie de l'équipe de développement et idéalement de l'extérieur de l'organisation, mais ces testeurs ont des difficultés à comprendre le domaine d'application" }
        },
        {
          id: "d",
          text: { en: "Testers from outside the developer's team are more independent than testers from within the team, but the testers from within the team are more likely to be blamed for delays in product release", 
                  fr: "Les testeurs extérieurs à l'équipe de développement sont plus indépendants que les testeurs internes, mais les testeurs internes sont plus susceptibles d'être blâmés pour les retards de publication du produit" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qc9",
      number: 9,
      text: {
        en: "Which of the following is a good testing practice that applies to all software development lifecycles?",
        fr: "Laquelle des pratiques de test suivantes est une bonne pratique applicable à tous les cycles de vie du développement logiciel ?",
      },
      options: [
        {
          id: "a",
          text: { en: "For each test level, there is a corresponding development level", 
                fr: "À chaque niveau de test correspond un niveau de développement correspondant" }
        },
        {
          id: "b",
          text: { en: " For each test objective, there is a corresponding development objective", 
                  fr: "À chaque objectif de test correspond un objectif de développement correspondant" }
        },
        {
          id: "c",
          text: { en: "For every software test activity, there is a corresponding user activity", 
                  fr: "À chaque activité de test logiciel correspond une activité utilisateur correspondante" }
        },
        {
          id: "d",
          text: { en: "For every software development activity, there is a corresponding test activity", 
                  fr: "À chaque activité de développement logiciel correspond une activité de test correspondante" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "qc10",
      number: 10,
      text: {
        en: "Which of the following is an example of a test-first approach to development?",
        fr: "Quelle est une illustration de l'approche du 'Test-First' en développement logiciel ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Component Test-Driven Development", 
                fr: "Développement piloté par les tests unitaires (Component Test-Driven Development)" }
        },
        {
          id: "b",
          text: { en: "Integration Test-Driven Development", 
                  fr: "Développement piloté par les tests d'intégration (Integration Test-Driven Development)" }
        },
        {
          id: "c",
          text: { en: "System Test-Driven Development", 
                  fr: "Développement piloté par les tests système (System Test-Driven Development)" }
        },
        {
          id: "d",
          text: { en: "Acceptance Test-Driven Development", 
                  fr: "Développement piloté par l'acceptation (Acceptance Test-Driven Development)" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "qc11",
      number: 11,
      text: {
        en: "Which of the following provides the BEST description of the shift-left approach?",
        fr: "Laquelle des descriptions suivantes fournit la MEILLEURE explication de l'approche 'Shift-Left' ?",
      },
      options: [
        {
          id: "a",
          text: { en: "When agreed by the developers, manual activities on the left-hand side of the test process are automated to support the principle of 'early testing saves time and money' ", 
                fr: "Lorsque les développeurs l'approuvent, les activités manuelles situées sur le côté gauche du processus de test sont automatisées pour soutenir le principe 'tester tôt permet d'économiser du temps et de l'argent'" }
        },
        {
          id: "b",
          text: { en: "Where cost-effective, test activities are moved to be performed earlier in the software development lifecycle (SDLC) to reduce the total cost of quality by reducing the number of defects found later in the SDLC", 
                  fr: "Lorsque cela est rentable, les activités de test sont déplacées vers le début du cycle de vie du développement logiciel (SDLC) afin de réduire le coût total de la qualité en diminuant le nombre de défauts trouvés plus tard dans le SDLC" }
        },
        {
          id: "c",
          text: { en: "When they have spare time available, testers are required to automate tests for regression testing, starting with component tests and component integration tests", 
                  fr: "Lorsqu'ils ont du temps libre, les testeurs doivent automatiser les tests de régression, en commençant par les tests unitaires et les tests d'intégration de composants" }
        },
        {
          id: "d",
          text: { en: "When available, testers are trained to perform tasks early in the SDLC to allow more test activities to be automated later in the SDLC ", 
                  fr: "Lorsque cela est possible, les testeurs sont formés pour effectuer des tâches en amont du SDLC afin de permettre l'automatisation d'un plus grand nombre d'activités de test plus tard dans le SDLC" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qc12",
      number: 12,
      text: {
        en: "Which of the following is LEAST likely to occur as a result of a retrospective?",
        fr: "Laquelle des situations suivantes est la MOINS susceptible de se produire à la suite d'une rétrospective ?",
      },
      options: [
        {
          id: "a",
          text: { en: "The quality of future test objects improves by identifying improvements in development practices", 
                fr: "La qualité des futurs objets de test s'améliore grâce à l'identification d'améliorations des pratiques de développement" }
        },
        {
          id: "b",
          text: { en: "Test efficiency improves by speeding up the configuration of test environments through automation ", 
                  fr: "L'efficacité des tests s'améliore en accélérant la configuration des environnements de test grâce à l'automatisation" }
        },
        {
          id: "c",
          text: { en: "End users' understanding of the development and test processes is improved", 
                  fr: "La compréhension des processus de développement et de test par les utilisateurs finaux est améliorée" }
        },
        {
          id: "d",
          text: { en: "Automated test scripts are enhanced through feedback from developers", 
                  fr: "Les scripts de test automatisés sont améliorés grâce aux commentaires des développeurs" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "qc13",
      number: 13,
      text: {
        en: "Which of the following test levels is MOST likely being performed if the testing is focused on validation and is not being performed by testers?",
        fr: "Parmi les niveaux de test suivants, lequel est le PLUS susceptible d'être réalisé si le test est axé sur la validation et n'est pas effectué par des testeurs ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Component testing", 
                fr: "Test unitaire" }
        },
        {
          id: "b",
          text: { en: "Component integration testing", 
                  fr: "Test d'intégration de composants" }
        },
        {
          id: "c",
          text: { en: "System integration testing", 
                  fr: "Test d'intégration système" }
        },
        {
          id: "d",
          text: { en: "Acceptance testing", 
                  fr: "Test d'acceptation" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "qc14",
      number: 14,
      text: {
        en: "The navigation system software has been updated due to it suggesting routes that break traffic laws, such as driving the wrong way down one-way streets. Which of the following BEST describes the testing that will be performed?",
        fr: "Le logiciel du système de navigation a été mis à jour car il suggérait des itinéraires enfreignant le code de la route, comme le fait de rouler à contresens dans des rues à sens unique. Lequel des tests suivants décrit le MIEUX celui qui sera effectué ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Only confirmation testing", 
                fr: "Uniquement un test de confirmation" }
        },
        {
          id: "b",
          text: { en: "Confirmation testing then regression testing", 
                  fr: "Un test de confirmation suivi d'un test de régression" }
        },
        {
          id: "c",
          text: { en: "Only regression testing", 
                  fr: "Uniquement un test de régression" }
        },
        {
          id: "d",
          text: { en: "Regression testing then confirmation testing", 
                  fr: "Un test de régression suivi d'un test de confirmation" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qc15",
      number: 15,
      text: {
        en: "Given the following example defects:",
        fr: "Étant donné les exemples de défauts suivants :",
      },
      romanList: {
        en: ["Two different parts of the design specification disagree due to the complexity of the design", "A response time is too long and so makes users lose patience", "A path in the code cannot be reached during execution", "A variable is declared but never subsequently used in the program", "The amount of memory needed by the program to generate a report is too high"],
        fr: ["Deux parties différentes de la spécification de conception sont en désaccord en raison de la complexité de la conception.", "Un temps de réponse est trop long et fait perdre patience aux utilisateurs.", "Un chemin dans le code est inaccessible pendant l'exécution.", "Une variable est déclarée mais jamais utilisée par la suite dans le programme.", "La quantité de mémoire nécessaire au programme pour générer un rapport est trop élevée."]
      },
      text4: {
        en: "Which of the following BEST identifies example defects that could be found by static testing (rather than dynamic testing)?",
        fr: "Lequel des éléments suivants identifie le MIEUX les exemples de défauts pouvant être trouvés par analyse statique (plutôt que par analyse dynamique) ?"
      },
      options: [
        {
          id: "a",
          text: { en: "ii, v", 
                fr: "ii, v" }
        },
        {
          id: "b",
          text: { en: "iii, v", 
                  fr: "iii, v" }
        },
        {
          id: "c",
          text: { en: "i, ii, iv", 
                  fr: "i, ii, iv" }
        },
        {
          id: "d",
          text: { en: "i, iii, iv", 
                  fr: "i, iii, iv" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "qc16",
      number: 16,
      text: {
        en: "Which of the following is a benefit of early and frequent stakeholder feedback?",
        fr: "Parmi les avantages suivants, lequel est associé à un feedback des parties prenantes précoce et fréquent ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Changes to requirements are understood and implemented earlier", 
                fr: "Les modifications des exigences sont comprises et mises en œuvre plus tôt" }
        },
        {
          id: "b",
          text: { en: "It ensures business stakeholders understand user requirements", 
                  fr: "Cela garantit que les parties prenantes métiers comprennent les exigences des utilisateurs" }
        },
        {
          id: "c",
          text: { en: "It allows product owners to change their requirements as often as they want", 
                  fr: "Cela permet aux propriétaires de produits de modifier leurs exigences aussi souvent qu'ils le souhaitent" }
        },
        {
          id: "d",
          text: { en: "End users are told which requirements will not be implemented prior to release", 
                  fr: "On informe les utilisateurs finaux des exigences qui ne seront pas implémentées avant la publication" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qc17",
      number: 17,
      text: {
        en: "Given the following review types:",
        fr: "Étant donné les types d'examen suivants :",
      },
        numerList: {
          en: ["Technical review", "Informal review", "Inspection", "Walkthrough"],
          fr: ["Revue technique", "Revvue informel", "Inspection", "Relecture technique"]
        },
      textBetween: {
        en: "And the following descriptions:",
        fr: "Et les descriptions suivantes :"
      },
      alphaList: {
        en: ["Includes objectives such as gaining consensus, generating new ideas, and motivating authors to improve", "Includes objectives such as educating reviewers, gaining consensus, generating new ideas and detecting potential defects", "The main objective is detecting potential defects and it requires metrics collection to support process improvement", "The main objective is detecting potential defects and it generates no formal documented output"],
        fr: ["Inclut des objectifs tels que la recherche d'un consensus, la génération de nouvelles idées et la motivation des auteurs à s'améliorer", "Inclut des objectifs tels que la formation des examinateurs, la recherche d'un consensus, la génération de nouvelles idées et la détection de défauts potentiels", "L'objectif principal est la détection de défauts potentiels et nécessite la collecte de mesures pour soutenir l'amélioration du processus", "L'objectif principal est la détection de défauts potentiels et ne génère aucun document de sortie formel"]
      },
      text3: {
        en: "Which of the following BEST matches the review types and the descriptions?",
        fr: "Laquelle des options suivantes correspond le MIEUX aux types d'examen et à leurs descriptions ?"
      },
      options: [
        {
          id: "a",
          text: { en: "1A, 2B, 3C, 4D", 
                fr: "1A, 2B, 3C, 4D" }
        },
        {
          id: "b",
          text: { en: "1A, 2D, 3C, 4B", 
                  fr: "1A, 2D, 3C, 4B" }
        },
        {
          id: "c",
          text: { en: "1B, 2C, 3D, 4A", 
                  fr: "1B, 2C, 3D, 4A" }
        },
        {
          id: "d",
          text: { en: "1C, 2D, 3A, 4B", 
                  fr: "1C, 2D, 3A, 4B" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qc18",
      number: 18,
      text: {
        en: "Which of the following is a factor that contributes to a successful review?",
        fr: "Laquelle des situations suivantes est un facteur qui contribue à la réussite d'une revue ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Ensure management participate as reviewers", 
                fr: "S'assurer que la direction participe en tant que réviseur" }
        },
        {
          id: "b",
          text: { en: "Split large work products into smaller parts", 
                  fr: "Diviser les produits de travail volumineux en parties plus petites" }
        },
        {
          id: "c",
          text: { en: "Set reviewer evaluation as an objective", 
                  fr: "Définir l'évaluation des réviseurs comme un objectif" }
        },
        {
          id: "d",
          text: { en: "Plan to cover one document per review", 
                  fr: "Prévoir de couvrir un document par revue" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qc19",
      number: 19,
      text: {
        en: "Quelle est la PRINCIPALE différence entre les techniques de test en boîte noire et les techniques de test basées sur l'expérience ?",
        fr: "Laquelle des affirmations suivantes décrit le MIEUX la différence entre les tests par table de décision et les tests par branche ?",
      },
      options: [
        {
          id: "a",
          text: { en: "The test object", 
                fr: "L'objet du test" }
        },
        {
          id: "b",
          text: { en: "The test level at which the test technique is used", 
                  fr: "Le niveau de test auquel la technique de test est utilisée" }
        },
        {
          id: "c",
          text: { en: "The test basis", 
                  fr: "La base du test" }
        },
        {
          id: "d",
          text: { en: "The software development lifecycle (SDLC) in which the test technique can be used", 
                  fr: "Le cycle de vie du développement logiciel (SDLC) dans lequel la technique de test peut être utilisée" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "qc20",
      number: 20,
      text: {
        en: "You are testing a PIN validator which accepts valid PINs and rejects invalid PINs. A PIN is a sequence of digits. A PIN is valid if it consists of four digits and at least two of them are different.",
        fr: "Vous testez un validateur de code PIN qui accepte les codes PIN valides et rejette les codes PIN non valides. Un code PIN est une séquence de chiffres. Un code PIN est valide s'il est composé de quatre chiffres et qu'au moins deux d'entre eux sont différents.",
      },
      text2: {
        en: "Which of the following sets of input test data cover all equivalence partitions for this scenario?",
        fr: "Lequel des ensembles suivants de données de test d'entrée couvre toutes les partitions d'équivalence pour ce scénario ?"
      },
      options: [
        {
          id: "a",
          text: { en: "112, 1111, 1234, 123456", 
                fr: "112, 1111, 1234, 123456" }
        },
        {
          id: "b",
          text: { en: "1, 123, 1111, 1234", 
                  fr: "1, 123, 1111, 1234" }
        },
        {
          id: "c",
          text: { en: "12, 112, 1112, 11112", 
                  fr: "12, 112, 1112, 11112" }
        },
        {
          id: "d",
          text: { en: "1, 111, 1111, 11111", 
                  fr: "1, 111, 1111, 11111" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qc21",
      number: 21,
      text: {
        en: "A developer was asked to implement the following business rule:",
        fr: "Un développeur doit implémenter la règle métier suivante :",
      },
      text2: {
        en: "INPUT: value (integer number) \nIF (value ≤ 100 OR value ≥ 200) THEN write “value incorrect” \nELSE write “value OK”",
        fr: "INPUT: value (integer number) \nIF (value ≤ 100 OR value ≥ 200) THEN write “value incorrect” \nELSE write “value OK”"
      },
      text3: {
        en: "You design the test cases using 2-value boundary value analysis",
        fr: "Vous concevez les cas de test en utilisant l'analyse des valeurs limites à 2 valeurs."
      },
      text4: {
        en: "Which of the following sets of test inputs achieves the greatest coverage?",
        fr: "Lequel des ensembles d'entrées de test suivants permet d'obtenir la couverture la plus élevée ?"
      },
      options: [
        {
          id: "a",
          text: { en: "100, 150, 200, 201", 
                fr: "100, 150, 200, 201" }
        },
        {
          id: "b",
          text: { en: "99, 100, 200, 201", 
                  fr: "99, 100, 200, 201" }
        },
        {
          id: "c",
          text: { en: "98, 99, 100, 101", 
                  fr: "98, 99, 100, 101" }
        },
        {
          id: "d",
          text: { en: "101, 150, 199, 200", 
                  fr: "101, 150, 199, 200" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "qc22",
      number: 22,
      text: {
        en: "You are working on a project to develop a system to analyze driving test results. You have been asked to design test cases based on the following decision table.",
        fr: "Vous travaillez sur un projet de développement d'un système d'analyse des résultats des tests de conduite. On vous a demandé de concevoir des cas de test basés sur le tableau de décision suivant.",
      },      
      tableData: {
        headers: {
          en: [" ", "R1", "R2", "R3"],
          fr: [" ", "R1", "R2", "R3"]
        },
        rows: {
         en:  [
          ["C1: First attempt at the exam?", "-", "-", "F"],
          ["C2: Theoretical exam passed?", "T", "F", "-"],
          ["C3: Practical exam passed?", "T", "-", "F"],
          [""],
          ["Issue a driving license?", "X", "", ""],
          ["Request additional driving lessons?", "", "", "X"],
          ["Request to take the exam again?", "", "X", ""],
        ],
          fr: [
            ["C1 : Première tentative à l'examen ?", "-", "-", "F"],
            ["C2 : Examen théorique réussi ?", "V", "F", "-"],
            ["C3 : Examen pratique réussi ?", "V", "-", "F"],
            [""],
            ["Délivrer un permis de conduire ?", "X", "", ""],
            ["Demander des cours de conduite supplémentaires ?", "", "", "X"],
            ["Demande de repasser l'examen ?", "", "X", ""],
          ]
        }
      },
      text4: {
        en: "What test data will show that there are contradictory rules in the decision table?",
        fr: "quelles données de test montreront qu'il existe des règles contradictoires dans le tableau de décision ?"
      },
      options: [
        {
          id: "a",
          text: { en: "C1 = T, C2 = T, C3 = F", 
                fr: "C1 = V, C2 = V, C3 = F" }
        },
        {
          id: "b",
          text: { en: "C1 = T, C2 = F, C3 = T", 
                  fr: "C1 = V, C2 = F, C3 = V" }
        },
        {
          id: "c",
          text: { en: "C1 = T, C2 = T, C3 = T and C1 = F, C2 = T, C3 = T", 
                  fr: "C1 = V, C2 = V, C3 = V and C1 = F, C2 = V, C3 = V" }
        },
        {
          id: "d",
          text: { en: "C1 = F, C2 = F, C3 = F", 
                  fr: "C1 = F, C2 = F, C3 = F" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "qc23",
      number: 23,
      text: {
        en: "You are designing test cases based on the following state transition diagram:",
        fr: "Vous concevez des cas de test basés sur le diagramme de transition d'état suivant :",
      },
      image: "./src/images/Transittion Dagram C-Q23.png",
      imageAlt: {
        en: "State Transition exam c question 23",
        fr: "Etat de Transtion examen c question 23"
      },
      text2: {
        en: "What is the MINIMUM number of test cases required to achieve 100% valid transitions coverage?",
        fr: "Quel est le NOMBRE MINIMUM de cas de test requis pour atteindre une couverture de 100 % des transitions valides ?"
      },
      options: [
        {
          id: "a",
          text: { en: "3", 
                fr: "3" }
        },
        {
          id: "b",
          text: { en: "2", 
                  fr: "2" }
        },
        {
          id: "c",
          text: { en: "5", 
                  fr: "5" }
        },
        {
          id: "d",
          text: { en: "6", 
                  fr: "6" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qc24",
      number: 24,
      text: {
        en: "You want to apply branch testing to the code represented by the following control flow graph.",
        fr: "Vous souhaitez appliquer le test par branche au code représenté par le graphe de flux de contrôle suivant.",
      },
      image: "./src/images/exam Cq24.jpg",
      imageAlt: {
        en: "branch coverage exam c question 24",
        fr: "couverture de branche examen c question 24"
      },
      text2 : {
        en: "How many coverage items do you need to test?",
        fr: "De combien d'éléments de couverture avez-vous besoin pour effectuer les tests ?"
      },
      options: [
        {
          id: "a",
          text: { en: "2", 
                fr: "2" }
        },
        {
          id: "b",
          text: { en: "4", 
                  fr: "4" }
        },
        {
          id: "c",
          text: { en: "8", 
                  fr: "8" }
        },
        {
          id: "d",
          text: { en: "7", 
                  fr: "7" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "qc25",
      number: 25,
      text: {
        en: "How can white-box testing be useful in support of black-box testing?",
        fr: "Comment les tests en boîte blanche peuvent-ils être utiles pour soutenir les tests en boîte noire ?",
      },
      options: [
        {
          id: "a",
          text: { en: "White-box coverage measures can help testers evaluate black-box tests in terms of the code coverage achieved by these black-box tests", 
                fr: "Les mesures de couverture en boîte blanche peuvent aider les testeurs à évaluer les tests en boîte noire en fonction de la couverture de code obtenue par ces tests en boîte noire." }
        },
        {
          id: "b",
          text: { en: "White-box coverage analysis can help testers identify unreachable fragments of the source code", 
                  fr: "L'analyse de la couverture en boîte blanche peut aider les testeurs à identifier des fragments inaccessibles du code source." }
        },
        {
          id: "c",
          text: { en: "Branch testing subsumes black-box test techniques, so achieving full branch coverage guarantees achieving full coverage of any black-box technique", 
                  fr: "Le test par branche englobe les techniques de test en boîte noire, donc atteindre une couverture de branche complète garantit une couverture complète de toute technique en boîte noire." }
        },
        {
          id: "d",
          text: { en: "White-box test techniques can provide coverage items for black-box techniques", 
                  fr: "Les techniques de test en boîte blanche peuvent fournir des éléments de couverture pour les techniques en boîte noire." }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qc26",
      number: 26,
      text: {
        en: "Consider the following list:",
        fr: "Considérez la liste suivante :",
      },
      list: {
        en: ["Correct input not accepted", "Incorrect input accepted", "Wrong output format", "Division by zero"],
        fr: ["Entrée correcte non acceptée", "Entrée incorrecte acceptée", "Format de sortie incorrect", "Division par zéro"]
      },
      text4: {
        en: "What test technique is MOST PROBABLY used by the tester who uses this list when performing testing?",
        fr: "Quelle technique de test est la PLUS PROBABLEMENT utilisée par le testeur qui utilise cette liste lors de ses tests ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Exploratory testing", 
                fr: "Test exploratoire" }
        },
        {
          id: "b",
          text: { en: "Fault attack", 
                  fr: "Attaque par injection de faille (Fault Attack)" }
        },
        {
          id: "c",
          text: { en: "Checklist-based testing", 
                  fr: "Test basé sur une liste de vérification (Checklist)" }
        },
        {
          id: "d",
          text: { en: "Boundary value analysis", 
                  fr: "Analyse des valeurs limites" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qc27",
      number: 27,
      text: {
        en: "Which of the following BEST describes how using checklist-based testing can result in increased coverage?",
        fr: "Laquelle des options suivantes décrit le MIEUX comment l'utilisation de tests basés sur une liste de vérification peut augmenter la couverture de test ?",
      },
      options: [
        {
          id: "a",
          text: { en: "Checklist items can be defined at a sufficiently low level of detail, so the tester can implement and execute detailed test cases based on these items", 
                fr: "Les éléments de la liste de vérification peuvent être définis avec un niveau de détail suffisamment bas pour que le testeur puisse mettre en œuvre et exécuter des cas de test détaillés basés sur ces éléments." }
        },
        {
          id: "b",
          text: { en: "Checklists can be automated, so each time an automated test execution covers the checklist items, it results in additional coverage", 
                  fr: "Les listes de vérification peuvent être automatisées, de sorte que chaque fois qu'une exécution de test automatisé couvre les éléments de la liste de vérification, cela se traduit par une couverture supplémentaire." }
        },
        {
          id: "c",
          text: { en: "Each checklist item should be tested separately and independently, so the elements cover different areas of the software", 
                  fr: "Chaque élément de la liste de vérification doit être testé séparément et indépendamment, de sorte que les éléments couvrent différents domaines du logiciel." }
        },
        {
          id: "d",
          text: { en: "Two testers designing and executing tests based on the same high-level checklist items will typically perform the testing in slightly different ways", 
                  fr: "Deux testeurs concevant et exécutant des tests basés sur les mêmes éléments de liste de vérification de haut niveau effectueront généralement les tests de manière légèrement différente." }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "qc28",
      number: 28,
      text: {
        en: "Which of the following provides the BEST example of a scenario-oriented acceptance criterion?",
        fr: "Lequel des éléments suivants constitue le MEILLEUR exemple de critère d'acceptation orienté scénario ?",
      },
      options: [
        {
          id: "a",
          text: { en: "The application must allow users to delete their account and all associated data upon request", 
                fr: "L'application doit permettre aux utilisateurs de supprimer leur compte et toutes les données associées sur demande." }
        },
        {
          id: "b",
          text: { en: "When a customer adds an item to their cart and proceeds to checkout, they should be prompted to log in or create an account if they haven't already done so", 
                  fr: "Lorsqu'un client ajoute un article à son panier et passe à la page de paiement, il doit être invité à se connecter ou à créer un compte s'il ne l'a pas déjà fait." }
        },
        {
          id: "c",
          text: { en: " IF (contain(product(23).Name, cart.products())) THEN return FALSE", 
                  fr: "IF (contain(product(23).Name, cart.products())) THEN return FALSE" }
        },
        {
          id: "d",
          text: { en: "The website must comply with the ICT Accessibility 508 Standards and ensure that all content is accessible to users with disabilities", 
                  fr: "Le site Web doit être conforme aux normes d'accessibilité TIC 508 et garantir que tout le contenu est accessible aux utilisateurs handicapés" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qc29",
      number: 29,
      text: {
        en: "Your team analyzes the following user story in order to define the acceptance criteria: ",
        fr: "Votre équipe analyse le user story suivant afin de définir les critères d'acceptation :"
      },
      italic: {
        en: "As a registered customer, I want to be able to view my previous orders on the company's website, so that I can keep track of my purchases.",
        fr: "En tant que client enregistré, je souhaite pouvoir consulter mes commandes précédentes sur le site Web de l'entreprise, afin de pouvoir suivre mes achats."
      },
      textRe: {
        en: "Which of the following test cases will <b>NOT</b> be relevant for this user story?",
        fr: "Lequel des cas de test suivants NE SERA PAS pertinent pour ce user story ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Input: the customer logs into their account on the website and clicks the “see order history” button \nExpected output: the system shows a list of all the customer's previous orders, including the date, order number, and total cost", 
                fr: "Entrée : le client se connecte à son compte sur le site Web et clique sur le bouton « voir l'historique des commandes » \nSortie attendue : le système affiche une liste de toutes les commandes précédentes du client, y compris la date, le numéro de commande et le coût total" }
        },
        {
          id: "b",
          text: { en: "Input: the customer clicks on an order from the order list \nExpected output: the system displays the individual items purchased, along with their prices and quantities", 
                  fr: "Entrée : le client clique sur une commande dans la liste des commandes \nSortie attendue : le système affiche les articles individuels achetés, ainsi que leurs prix et quantités" }
        },
        {
          id: "c",
          text: { en: "Input: the customer clicks “Sort ascending” button on the order history screen \nExpected output: the system shows the order history sorted by order number in ascending order", 
                  fr: "Entrée : le client clique sur le bouton « Trier par ordre croissant » sur l'écran de l'historique des commandes \nSortie attendue : le système affiche l'historique des commandes trié par numéro de commande par ordre croissant" }
        },
        {
          id: "d",
          text: { en: "Input: an unregistered customer registers as a new customer with a valid e-mail address that does not already exist in the customer database \nExpected output: the system accepts the registration and creates the account", 
                  fr: "Entrée : un client non enregistré s'enregistre en tant que nouveau client avec une adresse e-mail valide qui n'existe pas déjà dans la base de données client \nSortie attendue : le système accepte l'inscription et crée le compte" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    },
    {
      id: "qc30",
      number: 30,
      text: {
        en: "Your team follows the process that uses the DevOps delivery pipeline. The first three steps of this process are:",
        fr: "Votre équipe suit le processus qui utilise le pipeline de livraison DevOps. Les trois premières étapes de ce processus sont les suivantes :"
      },
      numerList: {
        en: ["Code development", "Submit code into a version control system and merge it into the “test” branch", "Perform component testing for the submitted code"],
        fr: ["Développement du code", "Soumettre le code dans un système de contrôle de version et le fusionner dans la branche « test »", "Effectuer des tests unitaires pour le code soumis"]
      },
      text2: {
        en: "Which of the following is BEST suited to be the entry criterion for step (2) of this pipeline?",
        fr: "Laquelle des options suivantes est la MIEUX adaptée pour être le critère d'entrée de l'étape (2) de ce pipeline ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Static analysis returns no high severity warnings for the submitted code", 
                fr: "L'analyse statique ne renvoie aucun avertissement de haute gravité pour le code soumis" }
        },
        {
          id: "b",
          text: { en: "System version control reports no conflicts when merging code into the “test” branch", 
                  fr: "Le contrôle de version du système ne signale aucun conflit lors de la fusion du code dans la branche « test »" }
        },
        {
          id: "c",
          text: { en: "Component tests are compiled and ready to be executed", 
                  fr: "Les tests unitaires sont compilés et prêts à être exécutés" }
        },
        {
          id: "d",
          text: { en: "Statement coverage is at least 80%", 
                  fr: "La couverture d'instructions est d'au moins 80%" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qc31",
      number: 31,
      text: {
        en: "You want to estimate the test effort for the new project using estimation based on ratios. You calculate the test-to-development effort ratio using averaged data for both development effort and test effort from four historical projects similar to the new one. The table shows this historical data.",
        fr: "Vous souhaitez estimer l'effort de test pour le nouveau projet en utilisant une estimation basée sur des ratios. Vous calculez le ratio effort de test / effort de développement en utilisant les données moyennes de l'effort de développement et de l'effort de test de quatre projets historiques similaires au nouveau projet. Le tableau illustre ces données historiques."
      },
      tableData: {
        headers: {
          en: ["Project", "Development Effort ($)", "Test Effort ($)"],
          fr: ["projet", "Effort de développement ($)", "Effort de test ($)"]
        },
        rows: {
          en: [
            ["P1", "800,000", "40,000"],
            ["P2", "1,200,000", "130,000"],
            ["P3", "600,000", "70,000"],
            ["P4", "1,000,000", "120,000"],
          ],
          fr: [
            ["P1", "800,000", "40,000"],
            ["P2", "1,200,000", "130,000"],
            ["P3", "600,000", "70,000"],
            ["P4", "1,000,000", "120,000"],
          ]
        },
      },
      text3: {
        en: "The estimated development effort for the new project is $800,000. What is your estimate of the test effort in this project?",
        fr: "L'effort de développement estimé pour le nouveau projet est de 800 000 $. Quelle est votre estimation de l'effort de test pour ce projet ?"
      },
      options: [
        {
          id: "a",
          text: { en: "$40,000", 
                fr: "$40,000" }
        },
        {
          id: "b",
          text: { en: "$80,000", 
                  fr: "$80,000" }
        },
        {
          id: "c",
          text: { en: "$81,250", 
                  fr: "$81,250" }
        },
        {
          id: "d",
          text: { en: "$82,500", 
                  fr: "$82,500" }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qc32",
      number: 32,
      text: {
        en: "You are testing a web application that allows users to SEARCH for products, VIEW product details, ADD products to a shopping cart, and place an ORDER. \nYou have prepared the following seven test cases, all of which you want to execute. The tests should be executed in the best order, based on test priority.",
        fr: "Vous testez une application web qui permet aux utilisateurs de RECHERCHER des produits, AFFICHER les détails des produits, AJOUTER des produits à un panier et passer une COMMANDE.\nVous avez préparé les cinq cas de test suivants, que vous souhaitez exécuter en fonction de leurs priorités :"
      },
      tableData: {
        headers: {
          en: ["", "Test", "Priority  (1 = higher priority)"],
          fr: ["", "Test", "Priorité  (1 = priorité plus élevée)"],
        },
        rows: {
          en: [
            ["TC1", "SEARCH for product A", "4"],
            ["TC2", "SEARCH for product B", "4"],
            ["TC3", "VIEW product A details", "3"],
            ["TC4", "VIEW product B details", "2"],
            ["TC5", "ADD product A to a shopping cart", "3"],
            ["TC6", "ADD product B to a shopping cart", "1"],
            ["TC7", "place an ORDER", "5"],
          ],
          fr: [
            ["CT1", "RECHERCHER le produit A ", "4"],
            ["CT2", "AFFICHER les détails du produit A", "4"],
            ["CT3", "VOIR les détails du produit A", "3"],
            ["CT4", "VOIR les détails du produit B", "2"],
            ["CT5", "AJOUTER le produit A à un panier", "3"],
            ["CT6", "AJOUTER le produit B à un panier", "1"],
            ["CT7", "passer une COMMANDE", "5"],
          ]
        },
      },
      text3: {
        en: "You also identified the following logical dependencies between test cases:",
        fr: "Vous avez également identifié les dépendances logiques suivantes entre les cas de test :",
      },
      list :{
        en: ["SEARCH functionality must be tested before VIEW functionality can be tested", "VIEW functionality must be tested before ADD functionality.", "ADD functionality must be tested before ORDER functionality."],
        fr: ["La fonctionnalité de RECHERCHE doit être testée avant la fonctionnalité d'AFFICHAGE", "La fonctionnalité d'AFFICHAGE doit être testée avant la fonctionnalité d'AJOUT", "La fonctionnalité d'AJOUT doit être testée avant la fonctionnalité de COMMANDE"]
      },
      text4: {
        en:"Which test case should be executed as the fourth one?",
        fr:"Quel est le quatrième cas de test à exécuter ?"
      },
      options: [
        {
          id: "a",
          text: { en: "TC3", 
                fr: "CT3" }
        },
        {
          id: "b",
          text: { en: "TC1", 
                  fr: "CT1" }
        },
        {
          id: "c",
          text: { en: "TC7", 
                  fr: "CT7" }
        },
        {
          id: "d",
          text: { en: "TC2", 
                  fr: "CT2" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qc33",
      number: 33,
      text: {
        en: "According to the testing quadrants model, which of the following falls into quadrant Q1 (“technology facing” and “support the team”)?",
        fr: "Selon le modèle des quadrants de test, lequel des éléments suivants appartient au quadrant Q1 (« orienté technologie » et « support à l'équipe ») ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Usability testing", 
                fr: "Test d'utilisabilité" }
        },
        {
          id: "b",
          text: { en: "Functional testing", 
                  fr: "Test fonctionnel" }
        },
        {
          id: "c",
          text: { en: "User acceptance testing", 
                  fr: "Test d'acceptation utilisateur" }
        },
        {
          id: "d",
          text: { en: "Component integration testing", 
                  fr: "Test d'intégration de composants" }
        }
      ],
      correctAnswers: ["d"],
      multipleAnswers: false
    }, 
    {
      id: "qc34",
      number: 34,
      text: {
        en: "Given the following risks:",
        fr: "On vous présente les risques suivants :"
      },
      numerList :{
        en: ["Ineffective loop implementation causes long system responses", "Consumers change their preferences", "Flooding of the server room", "Patients above a certain age receive inaccurate reports"],
        fr: ["Une implémentation inefficace de boucle entraîne des temps de réponse système longs", "Les préférences des consommateurs changent", "Inondation de la salle des serveurs", "Les patients d'un certain âge reçoivent des rapports inexacts"]
      },
      textBetween: {
        en: "And the following mitigation activities:",
        fr: "Et les activités d'atténuation suivantes :"
      },
      alphaList: {
        en: ["Risk acceptance", "Performance testing", "Using boundary value analysis as the test technique", "Risk transfer"],
        fr: ["Acceptation du risque", "Tests de performance", "Utilisation de l'analyse des valeurs limites comme technique de test", "Transfert de risque"]
      },
      text3: {
        en:"Which of the following BEST matches the risks with the mitigation activities?",
        fr:"Laquelle des options suivantes associe LE MIEUX les risques aux activités d'atténuation ?"
      },
      options: [
        {
          id: "a",
          text: { en: "1C, 2D, 3A, 4B", 
                fr: "1C, 2D, 3A, 4B" }
        },
        {
          id: "b",
          text: { en: "1B, 2D, 3A, 4C", 
                  fr: "1B, 2D, 3A, 4C" }
        },
        {
          id: "c",
          text: { en: "1B, 2A, 3D, 4C", 
                  fr: "1B, 2A, 3D, 4C" }
        },
        {
          id: "d",
          text: { en: " 1C, 2A, 3D, 4B", 
                  fr: " 1C, 2A, 3D, 4B" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "qc35",
      number: 35,
      text: {
        en: "Which of the following is a product quality metric?",
        fr: "Laquelle des options suivantes est une mesure de la qualité du produit ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Mean time to failure", 
                fr: "Temps moyen entre les panne" }
        },
        {
          id: "b",
          text: { en: "Number of defects found", 
                  fr: "Nombre de défauts trouvés" }
        },
        {
          id: "c",
          text: { en: "Requirements coverage", 
                  fr: "Couverture des exigences" }
        },
        {
          id: "d",
          text: { en: "Defect detection percentage",  
                  fr: "Pourcentage de détection des défauts" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qc36",
      number: 36,
      text: {
        en: "You are a member of a test team located in North America, developing a product for a client located in Europe. The team is agile and follows the DevOps approach and uses a continuous integration/continuous delivery pipeline.",
        fr: "Vous faites partie d'une équipe de test située en Amérique du Nord et développez un produit pour un client situé en Europe. L'équipe est agile, suit l'approche DevOps et utilise un pipeline d'intégration continue/livraison continue."
      },
      text2: {
        en: "Which of the following is the LEAST effective way to communicate test progress to the customer?",
        fr: "Laquelle des méthodes suivantes est la MOINS efficace pour communiquer l'avancement des tests au client ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Face-to-face", 
                fr: "En face à face" }
        },
        {
          id: "b",
          text: { en: "Dashboards", 
                  fr: "Tableaux de bord" }
        },
        {
          id: "c",
          text: { en: "Email", 
                  fr: "Courriel" }
        },
        {
          id: "d",
          text: { en: "Video conferencing",  
                  fr: "Visioconférence" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qc37",
      number: 37,
      text: {
        en: "Which of the following BEST describes an example of how configuration management (CM) supports testing?",
        fr: "Laquelle des options suivantes décrit le MIEUX un exemple de la façon dont la gestion des configurations (GC) soutient les tests ?"
      },
      options: [
        {
          id: "a",
          text: { en: "Having the version number of the environment, the CM tool can retrieve the version numbers of libraries, stubs and drivers used in that environment", 
                fr: "En ayant le numéro de version de l'environnement, l'outil CM peut récupérer les numéros de version des bibliothèques, des stubs et des pilotes utilisés dans cet environnement" }
        },
        {
          id: "b",
          text: { en: "Having a record of the values of the test inputs, the CM tool can execute the test cases for these configurations and calculate test coverage", 
                  fr: "En ayant un enregistrement des valeurs des entrées de test, l'outil CM peut exécuter les cas de test pour ces configurations et calculer la couverture de test" }
        },
        {
          id: "c",
          text: { en: " Having data about the date of purchase of a software license, the CM tool automatically generates information about the fact that the product license is coming to an end ", 
                  fr: "En ayant des données sur la date d'achat d'une licence logicielle, l'outil CM génère automatiquement des informations sur l'expiration de la licence du produit" }
        },
        {
          id: "d",
          text: { en: "Having the version number of the test case, the CM tool can automatically generate test data for this test case",  
                  fr: "En ayant le numéro de version du cas de test, l'outil CM peut automatiquement générer des données de test pour ce cas de test" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    },
    {
      id: "qc38",
      number: 38,
      text: {
        en: "You are testing a sort function that gets a set of numbers as input and returns the same set of numbers sorted in ascending order. The log from the test execution looks as follows",
        fr: "Vous testez une fonction de tri qui reçoit un ensemble de nombres en entrée et renvoie le même ensemble de nombres triés par ordre croissant. nombres triés par ordre croissant. Le journal de l'exécution du test se présente comme suit."
      },
      image: "./src/images/Log exam B question 38.jpg",
      imageAlt: {
        en: "Log exam B question 38",
        fr: "Log examen B question 38"
      },
      text2: {
        en: "Which of the following provides the BEST description of the failure that can be used in a defect report? ",
        fr: "Laquelle des options suivantes décrit le MIEUX un exemple de la façon dont la gestion des configurations (CM) prend en charge les tests ?"
      },
      options: [
        {
          id: "a",
          text: { en: "The system fails to sort several sets of numbers. Reference: TC3, TC4, TC5.", 
                fr: "Le système ne parvient pas à trier plusieurs séries de chiffres. Référence : TC3, TC4, TC5." }
        },
        {
          id: "b",
          text: { en: "The system seems to disregard duplicates while sorting. Reference: TC3, TC4, TC5", 
                  fr: "Le système semble ignorer les doublons lors du tri. Référence : TC3, TC4, TC5 :" }
        },
        {
          id: "c",
          text: { en: "The system fails to sort negative numbers. Reference: TC4, TC5", 
                  fr: "Le système ne trie pas les nombres négatifs : TC4, TC5." }
        },
        {
          id: "d",
          text: { en: "TC3, TC4 and TC5 have defects (duplicate input data) and should be corrected.",  
                  fr: "TC3, TC4 et TC5 présentent des défauts (données d'entrée dupliquées) et doivent être corrigés." }
        }
      ],
      correctAnswers: ["b"],
      multipleAnswers: false
    },
    {
      id: "qc39",
      number: 39,
      text: {
        en: "Given the following descriptions:",
        fr: "On vous présente les descriptions suivantes :"
      },
      numerList: {
        en: ["Support workflow tracking", "Facilitate communication", "Virtual machines", "Support reviews"],
        fr: ["Soutenir le suivi du workflow", "Faciliter la communication", "Machines virtuelles", "Soutenir les revues"]
      },
      textBetween: {
        en: "And the following test tool categories:",
        fr: "Et les catégories d'outils de test suivantes :"
      },
      alphaList: {
        en: ["Static testing tools", "Tools supporting scalability and deployment standardization", "DevOps tools", "Collaboration tools"],
        fr: ["Outils de test statique", "Outils supportant l'évolutivité et la standardisation du déploiement", "Outils DevOps", "Outils de collaboration"],
      },
      text4: {
        en: "Which of the following BEST matches the descriptions and categories?",
        fr: "Laquelle des options suivantes associe LE MIEUX les descriptions et les catégories ?"
      },
      options: [
        {
          id: "a",
          text: { en: "1A, 2B, 3C, 4D", 
                fr: "1A, 2B, 3C, 4D" }
        },
        {
          id: "b",
          text: { en: "1B, 2D, 3C, 4A", 
                  fr: "1B, 2D, 3C, 4A" }
        },
        {
          id: "c",
          text: { en: "1C, 2D, 3B, 4A", 
                  fr: "1C, 2D, 3B, 4A" }
        },
        {
          id: "d",
          text: { en: "1D, 2C, 3A, 4B",  
                  fr: "1D, 2C, 3A, 4B" }
        }
      ],
      correctAnswers: ["c"],
      multipleAnswers: false
    },
    {
      id: "qc40",
      number: 40,
      text: {
        en: "Which of the following is MOST likely to be a benefit of test automation?",
        fr: "Laquelle des options suivantes est le PLUS susceptible d'être un avantage de l'automatisation des tests ?"
      },
      options: [
        {
          id: "a",
          text: { en: "It may introduce unknown regressions in production", 
                fr: "Elle fournit des mesures de couverture trop complexes à dériver pour les humains" }
        },
        {
          id: "b",
          text: { en: "It shares responsibility for the testing with the tool vendor", 
                  fr: "Elle partage la responsabilité des tests avec le fournisseur de l'outil" }
        },
        {
          id: "c",
          text: { en: "It removes the need for critical thinking when analyzing test results ", 
                  fr: "Elle supprime le besoin de pensée critique lors de l'analyse des résultats des tests" }
        },
        {
          id: "d",
          text: { en: "It generates test cases from an analysis of the program code",  
                  fr: "Elle génère des cas de test à partir d'une analyse du code du programme" }
        }
      ],
      correctAnswers: ["a"],
      multipleAnswers: false
    }
  ]
}