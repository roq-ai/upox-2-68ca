import { ApplicationInterface } from 'interfaces/application';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FreelancerProfileInterface {
  id?: string;
  user_id: string;
  skills?: string;
  experience?: number;
  hourly_rate?: number;
  availability?: any;
  portfolio_url?: string;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  user?: UserInterface;
  _count?: {
    application?: number;
  };
}

export interface FreelancerProfileGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  skills?: string;
  portfolio_url?: string;
}
