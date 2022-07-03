/** Interface for Service created for the manage the  types  */
export interface Service {
  id: string;
  name: string;
  description?: string;
  type: string;
}

export interface CreateService {
  name: string;
  description?: string;
  type: string;
}
