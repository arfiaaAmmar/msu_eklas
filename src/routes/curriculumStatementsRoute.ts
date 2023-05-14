import { StatementRouteType } from "./config";

export type CurriculumStatements = {
  id: string;
  department?: string;
  images?: string[];
  assets?: string[];
  children?: CurriculumStatements[];
};

export const curriculumStatementsRoute: CurriculumStatements[] = [
  {
    id: "Timetable & Calendar",
    department: "Timetable & Calendar",
    children: [
        {
            id: "Timetable",
            images: [
                "https://cdn.cp.adobe.io/content/2/rendition/15a61034-b34d-46dc-bd32-0335ae65fe90/artwork/05c8ada3-91c2-4459-bbe7-79c2d84862fb/version/0/format/jpg/dimension/width/size/400"
            ]
        },
        {
            id: "Academic Calendar",
            images: [
                "https://pbs.twimg.com/media/EzU24RSVgAUr2u0.jpg:large"
            ]
        }
    ],
  },
  {
    id: "Statements & Results",
    department: "Statements & Results",
    children: [
        {
            id: 'GEMS Statement',
            images: [
              'https://images.unsplash.com/photo-1583508913169-0b05d5e203d3?auto=format&fit=crop&w=600&q=80',
            ],
          },
          {
            id: 'Exam Results',
            images: [
              'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=600&q=80',
            ],
          },
          {
            id: 'Program Structure',
            images: [
              'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80',
            ],
          },
    ]
  }
];
