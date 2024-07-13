// models/project.ts
export interface Project {
    ID: string;
    project_name: string;
    image: string;
    university_name: string;
    project_details: string;
    universityDescription: string;
    project_mode: string;
    application_deadline: string;
    stipend: string;
    eligibility: string;
    university_location: string;
    ranking: string;
    coordinates: [number, number];
  }
  
