// import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
// import { CourseEntity } from '@cms/course/course/course.entity';
// import { EpisodeDataEntity } from '@cms/course/episode/episode-data.entity';
// import { StructureCourseCardEntity } from '@cms/course/course/structure.course.card.entity';
import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { UserEntity } from '@cms/users/user.entity';
import { TableEntity } from '@cms/tables/table.entity';
import { UserInfoEntity } from '@cms/user.info/user.info.entity';

export class SeedCourses1663266130531 implements MigrationInterface {
  private readonly tableRepo = getRepository(TableEntity);
  private readonly userRepo = getRepository(UserEntity);
  private readonly userInfoRepo = getRepository(UserInfoEntity);

  public async up(queryRunner: QueryRunner): Promise<void> {
    await this.createTables();
    await this.createUsers();
    await this.createUserInfo();
  }

  private async createUserInfo(): Promise<void> {
    await this.userInfoRepo.save({
      telegram_url: 'dsfdsff',
      telegramId: '4535345535',
      instagramUrl: '@dfafgaffdgdfa',
      user: { id: 1 },
    });
  }

  //   //
  public async down(queryRunner: QueryRunner): Promise<void> {}
  private async createUsers(): Promise<void> {
    await this.userRepo.save({
      firsName: 'Vlad',
      lastName: 'Brykov',
      avatar: '/hghsfhfgh',
      profession: 'NodeJS',
      login: 'login',
      password: 'password',
      table: { id: 1 },
    });
  }
  //   //
  private async createTables(): Promise<void> {
    await this.tableRepo.save({
      room: 'sddfsg',
    });
  }
}
//   // await this.tableRepo.save({
//   //   user: undefined,
//   // });
//   // await this.tableRepo.save({
//   //   user: undefined,
//   // });
//   // await this.tableRepo.save({
//   //   user: undefined,
//   // });
//   // await this.tableRepo.save({
//   //   user: undefined,
//   // });
//   // await this.tableRepo.save({
//   //   user: undefined,
//   // });
//   // await this.tableRepo.save({
//   //   user: undefined,
//   // });
//   // await this.tableRepo.save({
//   //   user: undefined,
//   // });
//   // await this.tableRepo.save({
//   //   user: undefined,
//   // });
//   // await this.tableRepo.save({
//   //   user: undefined,
//   // });
//   // await this.tableRepo.save({
//   //   user: undefined,
//   // });
//   // await this.tableRepo.save({
//   //   user: undefined,
//   // });
//   // await this.tableRepo.save({
//   //   user: undefined,
//   // });
//   // await this.tableRepo.save({
//   //   user: undefined,
//   // });
//   // await this.tableRepo.save({
//   //   user: undefined,
//   // });
//   // await this.tableRepo.save({
//   //   user: undefined,
//   // });
//   // await this.tableRepo.save({
//   //   user: undefined,
//   // });
//   // await this.tableRepo.save({
//   //   user: undefined,
//   // });
//   // await this.tableRepo.save({
//   //   user: undefined,
//   // });
//   // }
//   private readonly courseRepo = getRepository(CourseEntity);
//   private readonly episodesRepo = getRepository(EpisodeDataEntity);
//   private readonly courseCardRepo = getRepository(StructureCourseCardEntity);
//
//   public async up(queryRunner: QueryRunner) {
//     await this.createCourse();
//     await this.createEpisodes();
//     await this.createCourseCardBody();
//   }
//
//   public async down(queryRunner: QueryRunner): Promise<void> {}
//
//   private async createCourse(): Promise<void> {
//     await this.courseRepo.save({
//       quote:
//         'Nurture an ethical and emotionally invested scientist and technology creator in every child.',
//       //   {
//       //   id: 'repl-it',
//       //   title: 'Repl.it',
//       //   text_1:
//       //     'Repl.it is an online editor for writing code in every possible language imaginable. For this course we will be focusing on Javascript and specifically node.js so you will need to get familiar with its UI here:',
//       //   list: ['https://repl.it/languages/nodejs'],
//       //   text_2:
//       //     'There is no need to create an account on repl.it since it allows programmers to edit code in anonymous mode and this will be sufficient for the Activities and Homeworks.',
//       //   redirectUrl: 'https://repl.it/languages/nodejs',
//       // },
//
//       // stationary: '',
//       //   {
//       //   id: 'stationary',
//       //   title: 'Stationary',
//       //   text_1:
//       //     'In some Activities the students will need to design and write things down. It is recommended that you have a pen per student and plenty of white printer paper to be used as a scratch pad.',
//       // },
//       // electronicsKit: '',
//       //   {
//       //   id: 'electronics-kit',
//       //   title: 'Electronics Kit',
//       //   text_1:
//       //     'Please use the Electronics/Robotics Kit provided by the Altay Mobile Lab.',
//       // },
//     });
//   }
//   private async createEpisodes(): Promise<void> {
//     await this.episodesRepo.save({
//       episodeNumber: 0,
//       title: 'Discover the Lyra Terminal.',
//       learningOutcome: 'How technology is designed and discussed.',
//       episodeGuide:
//         'https://drive.google.com/file/d/1xraCjsIcz4kGWG69tYA_UaWsevt6a4Xh/view?usp=sharing',
//       activity:
//         'https://drive.google.com/file/d/12miIvIdoO3p8eR97bOStosQASsflgfhz/view?usp=sharing',
//       worksheet:
//         'https://drive.google.com/open?id=1uXOWJCX__J5Uu4Ak5XNp7lML86VHUnEt',
//       homework:
//         'https://drive.google.com/open?id=18SceWUG4Qk_6-hV_UisGthUVNxyyFmx1',
//       homeworkGuide:
//         'https://drive.google.com/file/d/1ORc7flD5PJjt51M_p4BsP7BubSU6OzSJ/view?usp=sharing',
//       courseId: 1,
//     });
//     await this.episodesRepo.save({
//       episodeNumber: 1,
//       title:
//         'Find the city of the office where WormWood is keeping the virus design.',
//       learningOutcome: 'How computers process input/output.',
//       episodeGuide:
//         'https://drive.google.com/file/d/1xraCjsIcz4kGWG69tYA_UaWsevt6a4Xh/view?usp=sharing',
//       activity:
//         'https://drive.google.com/file/d/12miIvIdoO3p8eR97bOStosQASsflgfhz/view?usp=sharing',
//       worksheet:
//         'https://drive.google.com/open?id=1uXOWJCX__J5Uu4Ak5XNp7lML86VHUnEt',
//       homework:
//         'https://drive.google.com/open?id=18SceWUG4Qk_6-hV_UisGthUVNxyyFmx1',
//       homeworkGuide:
//         'https://drive.google.com/file/d/1ORc7flD5PJjt51M_p4BsP7BubSU6OzSJ/view?usp=sharing',
//       courseId: 1,
//     });
//     await this.episodesRepo.save({
//       episodeNumber: 2,
//       title:
//         "Open WormWood's childhood box without getting electrocuted by his trap",
//       learningOutcome:
//         'Binary, switches, simple circuits, transistors and their history.',
//       episodeGuide:
//         'https://drive.google.com/file/d/1xraCjsIcz4kGWG69tYA_UaWsevt6a4Xh/view?usp=sharing',
//       activity:
//         'https://drive.google.com/file/d/12miIvIdoO3p8eR97bOStosQASsflgfhz/view?usp=sharing',
//       worksheet:
//         'https://drive.google.com/open?id=1uXOWJCX__J5Uu4Ak5XNp7lML86VHUnEt',
//       homework:
//         'https://drive.google.com/open?id=18SceWUG4Qk_6-hV_UisGthUVNxyyFmx1',
//       homeworkGuide:
//         'https://drive.google.com/file/d/1ORc7flD5PJjt51M_p4BsP7BubSU6OzSJ/view?usp=sharing',
//       courseId: 1,
//     });
//     await this.episodesRepo.save({
//       episodeNumber: 3,
//       title: "Find WormWood's exact office address.",
//       learningOutcome:
//         'NOT, OR, AND gates and boolean logic introduction through circuits.',
//       episodeGuide:
//         'https://drive.google.com/file/d/1xraCjsIcz4kGWG69tYA_UaWsevt6a4Xh/view?usp=sharing',
//       activity:
//         'https://drive.google.com/file/d/12miIvIdoO3p8eR97bOStosQASsflgfhz/view?usp=sharing',
//       worksheet:
//         'https://drive.google.com/open?id=1uXOWJCX__J5Uu4Ak5XNp7lML86VHUnEt',
//       homework:
//         'https://drive.google.com/open?id=18SceWUG4Qk_6-hV_UisGthUVNxyyFmx1',
//       homeworkGuide:
//         'https://drive.google.com/file/d/1ORc7flD5PJjt51M_p4BsP7BubSU6OzSJ/view?usp=sharing',
//       courseId: 1,
//     });
//     await this.episodesRepo.save({
//       episodeNumber: 4,
//       title: 'Break through the service door at the back of the building.',
//       learningOutcome:
//         'Digital circuits deep dive: LEDs, resistors, debugging.',
//       episodeGuide:
//         'https://drive.google.com/file/d/1xraCjsIcz4kGWG69tYA_UaWsevt6a4Xh/view?usp=sharing',
//       activity:
//         'https://drive.google.com/file/d/12miIvIdoO3p8eR97bOStosQASsflgfhz/view?usp=sharing',
//       worksheet:
//         'https://drive.google.com/open?id=1uXOWJCX__J5Uu4Ak5XNp7lML86VHUnEt',
//       homework:
//         'https://drive.google.com/open?id=18SceWUG4Qk_6-hV_UisGthUVNxyyFmx1',
//       homeworkGuide:
//         'https://drive.google.com/file/d/1ORc7flD5PJjt51M_p4BsP7BubSU6OzSJ/view?usp=sharing',
//       courseId: 1,
//     });
//     await this.episodesRepo.save({
//       episodeNumber: 5,
//       title: "Find the hidden passage to WormWood's lab.",
//       learningOutcome:
//         'ransmitting information, digital encoding, decoding, algorithm design.',
//       episodeGuide:
//         'https://drive.google.com/file/d/1xraCjsIcz4kGWG69tYA_UaWsevt6a4Xh/view?usp=sharing',
//       activity:
//         'https://drive.google.com/file/d/12miIvIdoO3p8eR97bOStosQASsflgfhz/view?usp=sharing',
//       worksheet:
//         'https://drive.google.com/open?id=1uXOWJCX__J5Uu4Ak5XNp7lML86VHUnEt',
//       homework:
//         'https://drive.google.com/open?id=18SceWUG4Qk_6-hV_UisGthUVNxyyFmx1',
//       homeworkGuide:
//         'https://drive.google.com/file/d/1ORc7flD5PJjt51M_p4BsP7BubSU6OzSJ/view?usp=sharing',
//       courseId: 1,
//     });
//     await this.episodesRepo.save({
//       episodeNumber: 6,
//       title: 'Take the elevator to the underground.',
//       learningOutcome:
//         'Learning Outcome: computer networks, routing protocol design, Internet.',
//       episodeGuide:
//         'https://drive.google.com/file/d/1xraCjsIcz4kGWG69tYA_UaWsevt6a4Xh/view?usp=sharing',
//       activity:
//         'https://drive.google.com/file/d/12miIvIdoO3p8eR97bOStosQASsflgfhz/view?usp=sharing',
//       worksheet:
//         'https://drive.google.com/open?id=1uXOWJCX__J5Uu4Ak5XNp7lML86VHUnEt',
//       homework:
//         'https://drive.google.com/open?id=18SceWUG4Qk_6-hV_UisGthUVNxyyFmx1',
//       homeworkGuide:
//         'https://drive.google.com/file/d/1ORc7flD5PJjt51M_p4BsP7BubSU6OzSJ/view?usp=sharing',
//       courseId: 1,
//     });
//     await this.episodesRepo.save({
//       episodeNumber: 7,
//       title: 'Explore the Chamber of Experiments of the Lucky Lab.',
//       learningOutcome:
//         'Processing requirements, making technology trade-offs, and testing assumptions.',
//       episodeGuide:
//         'https://drive.google.com/file/d/1xraCjsIcz4kGWG69tYA_UaWsevt6a4Xh/view?usp=sharing',
//       activity:
//         'https://drive.google.com/file/d/12miIvIdoO3p8eR97bOStosQASsflgfhz/view?usp=sharing',
//       worksheet:
//         'https://drive.google.com/open?id=1uXOWJCX__J5Uu4Ak5XNp7lML86VHUnEt',
//       homework:
//         'https://drive.google.com/open?id=18SceWUG4Qk_6-hV_UisGthUVNxyyFmx1',
//       homeworkGuide:
//         'https://drive.google.com/file/d/1ORc7flD5PJjt51M_p4BsP7BubSU6OzSJ/view?usp=sharing',
//       courseId: 1,
//     });
//     await this.episodesRepo.save({
//       episodeNumber: 8,
//       title: 'Unlock the pod that drives to the Hall of Hatching.',
//       learningOutcome:
//         'Computer architecture, Javascript introduction, reading code, writing clean, readable code.',
//       episodeGuide:
//         'https://drive.google.com/file/d/1xraCjsIcz4kGWG69tYA_UaWsevt6a4Xh/view?usp=sharing',
//       activity:
//         'https://drive.google.com/file/d/12miIvIdoO3p8eR97bOStosQASsflgfhz/view?usp=sharing',
//       worksheet:
//         'https://drive.google.com/open?id=1uXOWJCX__J5Uu4Ak5XNp7lML86VHUnEt',
//       homework:
//         'https://drive.google.com/open?id=18SceWUG4Qk_6-hV_UisGthUVNxyyFmx1',
//       homeworkGuide:
//         'https://drive.google.com/file/d/1ORc7flD5PJjt51M_p4BsP7BubSU6OzSJ/view?usp=sharing',
//       courseId: 1,
//     });
//     await this.episodesRepo.save({
//       episodeNumber: 9,
//       title: 'Disarm the guardians of the Hall of Hatching.',
//       learningOutcome:
//         'Javascript logical operators, flow Control, more algorithms, debugging.',
//       episodeGuide:
//         'https://drive.google.com/file/d/1xraCjsIcz4kGWG69tYA_UaWsevt6a4Xh/view?usp=sharing',
//       activity:
//         'https://drive.google.com/file/d/12miIvIdoO3p8eR97bOStosQASsflgfhz/view?usp=sharing',
//       worksheet:
//         'https://drive.google.com/open?id=1uXOWJCX__J5Uu4Ak5XNp7lML86VHUnEt',
//       homework:
//         'https://drive.google.com/open?id=18SceWUG4Qk_6-hV_UisGthUVNxyyFmx1',
//       homeworkGuide:
//         'https://drive.google.com/file/d/1ORc7flD5PJjt51M_p4BsP7BubSU6OzSJ/view?usp=sharing',
//       courseId: 1,
//     });
//     await this.episodesRepo.save({
//       episodeNumber: 10,
//       title: 'Boil the Mind Controlling Virus strains.',
//       learningOutcome:
//         'Javascript composite data types and functions & data processing algorithms.',
//       episodeGuide:
//         'https://drive.google.com/file/d/1xraCjsIcz4kGWG69tYA_UaWsevt6a4Xh/view?usp=sharing',
//       activity:
//         'https://drive.google.com/file/d/12miIvIdoO3p8eR97bOStosQASsflgfhz/view?usp=sharing',
//       worksheet:
//         'https://drive.google.com/open?id=1uXOWJCX__J5Uu4Ak5XNp7lML86VHUnEt',
//       homework:
//         'https://drive.google.com/open?id=18SceWUG4Qk_6-hV_UisGthUVNxyyFmx1',
//       homeworkGuide:
//         'https://drive.google.com/file/d/1ORc7flD5PJjt51M_p4BsP7BubSU6OzSJ/view?usp=sharing',
//       courseId: 1,
//     });
//     await this.episodesRepo.save({
//       episodeNumber: 11,
//       title:
//         'Shut down the Quantum Channel before WormWood finds you. Last class. No homework!',
//       learningOutcome:
//         'Combination of encoding, logical operators, data types, algorithms, and debugging.',
//       episodeGuide:
//         'https://drive.google.com/file/d/1xraCjsIcz4kGWG69tYA_UaWsevt6a4Xh/view?usp=sharing',
//       activity:
//         'https://drive.google.com/file/d/12miIvIdoO3p8eR97bOStosQASsflgfhz/view?usp=sharing',
//       worksheet:
//         'https://drive.google.com/open?id=1uXOWJCX__J5Uu4Ak5XNp7lML86VHUnEt',
//       homework:
//         'https://drive.google.com/open?id=18SceWUG4Qk_6-hV_UisGthUVNxyyFmx1',
//       homeworkGuide:
//         'https://drive.google.com/file/d/1ORc7flD5PJjt51M_p4BsP7BubSU6OzSJ/view?usp=sharing',
//       courseId: 1,
//     });
//   }
//   private async createCourseCardBody(): Promise<void> {
//     await this.courseCardRepo.save({
//       type: 'course-details',
//       title: 'Course Details',
//       startText: 'Introduction to Computer Science for Middle School',
//       courseId: 1,
//     });
//     await this.courseCardRepo.save({
//       type: 'curriculum-overview',
//       title: 'Curriculum Overview',
//       startText:
//         'In this introductory course we will teach students the following technical and soft skills:',
//       list: `<ul>
//                 <li>How to design novel technologies to address a problem.</li>
//                 <li>How to simplify complex solutions.</li>
//                 <li>How Computers take Inputs and produce Outputs.</li>
//                 <li>How to make Computers out of Transistors.</li>
//                 <li>What Binary Numbers and Boolean Logic are.</li>
//                 <li>How simple Computer Networks work.</li>
//                 <li>How to think about Trade-Offs when solving a problem for your Customers.</li>
//                 <li>How to analyze Algorithms and debug Computer Programs.</li>
//                 </ul>`,
//       middleText:
//         'The course follows the story-based learning approach that is linked to the World of WormWood storyline which you should familiarize yourself with here.',
//       redirectUrl:
//         'https://docs.google.com/document/d/1kmbiB-CvWtSBAWMRoICdTM0MCUxnc6TXhP9mn08t6uI/edit',
//       courseId: 1,
//     });
//     await this.courseCardRepo.save({
//       type: 'mission-overview',
//       title: 'Mission Overview',
//       startText:
//         "Let's see what your students' mission is for this introductory computer science course. Thea Sparky has found out that WormWood is building a virus that when inhaled, it can read someone’s mind. He plans to test the virus on his employees. Sparky is afraid that if WormWood builds this virus he will find out about the existence of the rebel group because she has spies in his organization.",
//       middleText:
//         'WormWood has hidden the design specs of the virus in the lab underneath one of his offices around the world. While in the future only WormWood knows where the design specs are, there are clues in today’s timeline to help narrow down the search. Sparky and her Sparks will need your students help to find a vulnerability and stop the virus from being effective.',
//       endTex:
//         "This information is for your eyes only. The students will learn about this mission during the game. You should pretend you don't know anything about WormWood or SeSoLT. Instead pretend you are curious and let the students instead share information with you as they discover it.",
//       courseId: 1,
//     });
//     await this.courseCardRepo.save({
//       type: 'classroom-materials',
//       title: 'Classroom Materials',
//       startText:
//         'This is the list of materials you need to prepare for this course.',
//       courseId: 1,
//     });
//     await this.courseCardRepo.save({
//       type: 'computer-equipment',
//       title: 'Computer Equipment',
//       startText:
//         'You should have a computer with a keyboard/mouse per 4-5 students in your class at most. Ideally one device per student is preferrable. For software installed:',
//       redirectUrl: 'http://www.sparkyindustries.com/lt',
//       courseId: 1,
//     });
//     await this.courseCardRepo.save({
//       type: 'computer-equipment',
//       title: 'Computer Equipment',
//       startText:
//         'You should have a computer with a keyboard/mouse per 4-5 students in your class at most. Ideally one device per student is preferrable. For software installed:',
//       list: `<ul><li>Chrome browser with Flash plug-in installed.</li></ul>`,
//       middleText:
//         'The students will be using the browser to access the story’s Episodes via the Lyra Terminal. You may test it by going to http://www.sparkyindustries.com/lt and entering the codeword “collaboration”.',
//       redirectUrl: 'http://www.sparkyindustries.com/lt',
//       courseId: 1,
//     });
//     await this.courseCardRepo.save({
//       type: 'tinker-cad',
//       title: 'TinkerCad',
//       startText:
//         "Create a TinkerCad account using your own email (or an email you created for the class) and set it to the United States Region setting when asked otherwise your menus will not be in English and might look strange since it doesn't seem that TinkerCad handles foreign languages well.",
//       middleText:
//         "Your students will be working on copies of DrTechniko TinkerCad projects and TinkerCad allows you to have multiple copies under the same account so you don't need a separate account for each student.",
//       redirectUrl: 'https://www.tinkercad.com/',
//       imageUrl: '/images/style/create_account.png',
//       courseId: 1,
//     });
//     await this.courseCardRepo.save({
//       type: 'repl-it',
//       title: 'Repl.it',
//       startText:
//         'Repl.it is an online editor for writing code in every possible language imaginable. For this course we will be focusing on Javascript and specifically node.js so you will need to get familiar with its UI here:',
//       list: `<ul><li>https://repl.it/languages/nodejs</li></ul>`,
//       middleText:
//         'There is no need to create an account on repl.it since it allows programmers to edit code in anonymous mode and this will be sufficient for the Activities and Homeworks.',
//       redirectUrl: 'https://repl.it/languages/nodejs',
//       courseId: 1,
//     });
//     await this.courseCardRepo.save({
//       type: 'stationary',
//       title: 'Stationary',
//       startText:
//         'In some Activities the students will need to design and write things down. It is recommended that you have a pen per student and plenty of white printer paper to be used as a scratch pad.',
//       courseId: 1,
//     });
//     await this.courseCardRepo.save({
//       type: 'electronic-kit',
//       title: 'Electronics Kit',
//       startText:
//         'Please use the Electronics/Robotics Kit provided by the Altay Mobile Lab.',
//       courseId: 1,
//     });
//     await this.courseCardRepo.save({
//       type: 'episode-list',
//       title: 'Episode List',
//       startText:
//         "For each class you will need to use the material for the next Episode starting with Episode 0 for your first class. Everything you'll need to know on how to run the Episode and the Activity are in the Episode Guide document.",
//       courseId: 1,
//     });
//   }
// }
