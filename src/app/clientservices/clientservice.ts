import { Client } from "../clients/client";
import { Service } from "../service/service";

export class Clientservice {
  public clientId: number;
  public serviceId: number;
  public dateDebut: Date;
  public dateFin: Date;
  public moyenContact: string;
  public remarque: string;
  public relanceEveNational: boolean;
  public relanceEveReligieux: boolean;
  public relanceanniversaire: boolean;
  public client: Client;
  public service: Service;
}
