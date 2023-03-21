export interface Job {
  jobId?: number;
  description: string;
  title: string;
  payrangemin: number;
  payrangemax: number;
  email: string;
  location: string;
  employerName: string;
}
