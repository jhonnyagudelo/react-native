export interface CreditsResponse {
  id: number;
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: KnownForDepartment;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id?: number;
  character?: Character;
  credit_id: string;
  order?: number;
  department?: string;
  job?: string;
}

export enum Character {
  ArchiveFootage = '(archive footage)',
}

export enum KnownForDepartment {
  Acting = 'Acting',
  Production = 'Production',
}
