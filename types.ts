
export enum Bucket {
  Perseguidora = 'perseguidora',
  Bloqueada = 'bloqueada',
  Desconectada = 'desconectada',
}

export type Answer = {
  text: string;
  buckets: Bucket[];
};

export type Question = {
  type: 'question';
  text: string;
  answers: Answer[];
};

export type Interstitial = {
  type: 'interstitial';
  title: string;
  text: string;
};

export type QuizItem = Question | Interstitial;

export type SalesContent = {
  profile: string;
  headline: string;
  cta: string;
  validation: string;
  explanation: string;
  bridge: string;
  bullets: string[];
  finalPitch: string;
  finalCTA: string;
  videoID?: string;
};

export type SalesConfig = {
  [key in Bucket]: SalesContent;
};
