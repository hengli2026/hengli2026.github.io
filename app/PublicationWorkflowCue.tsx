export type WorkflowKind = 'human' | 'ai';

type PublicationWorkflowCueProps = {
  kind: WorkflowKind;
};

function ConversionBurst() {
  return (
    <g className="workflow-conversion-burst">
      <path d="M52 3v10m0 44v10M17 35H5m94 0H87M27 10l7 9m43 32 7 9M27 60l7-9m43-32 7-9" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="88" cy="20" r="2" />
      <circle cx="18" cy="52" r="2" />
      <circle cx="88" cy="52" r="2" />
    </g>
  );
}

function GeneratedPaper() {
  return (
    <g className="workflow-generated-paper">
      <rect height="50" rx="4" width="38" x="33" y="10" />
      <path className="workflow-paper-lines" d="M40 22h24M40 29h24M40 36h18M40 43h22M40 50h15" />
      <path className="workflow-paper-fold" d="m61 10 10 10H61Z" />
    </g>
  );
}

function HumanResearcher() {
  return (
    <svg aria-hidden="true" className="workflow-illustration" viewBox="0 0 104 70">
      <g className="workflow-running-person">
        <circle className="workflow-runner-head" cx="51" cy="15" r="6" />
        <path className="workflow-runner-body" d="m48 21-6 20" />

        <g className="workflow-runner-arm-back">
          <path d="m46 27-13-7" />
        </g>
        <g className="workflow-runner-arm-front">
          <path d="m46 27 14 9" />
        </g>
        <g className="workflow-runner-leg-back">
          <path d="M42 41 29 54" />
        </g>
        <g className="workflow-runner-leg-front">
          <path d="m42 41 15 12" />
        </g>

        <g className="workflow-human-excitement">
          <path d="m61 8 7-6m-4 14h9M56 5V0" />
        </g>
      </g>

      <ConversionBurst />
      <GeneratedPaper />
    </svg>
  );
}

function AiResearcher() {
  return (
    <svg aria-hidden="true" className="workflow-illustration" viewBox="0 0 104 70">
      <g className="workflow-box-robot">
        <g className="workflow-robot-eyes">
          <path d="M41 29V24m20 5v-5M47 17h8" />
          <circle cx="40" cy="17" r="9" />
          <circle cx="62" cy="17" r="9" />
          <circle className="workflow-robot-pupil" cx="41" cy="17" r="3" />
          <circle className="workflow-robot-pupil" cx="61" cy="17" r="3" />
        </g>

        <rect className="workflow-robot-body" height="27" rx="4" width="42" x="30" y="29" />
        <path className="workflow-robot-panel" d="M37 36h13v11H37zm19 1h9m-9 4h9m-9 4h7" />
        <path className="workflow-robot-arms" d="m30 35-8 7m50-7 8 7" />

        <g className="workflow-robot-tracks">
          <rect height="10" rx="5" width="50" x="26" y="54" />
          <circle cx="34" cy="59" r="3" />
          <circle cx="46" cy="59" r="3" />
          <circle cx="58" cy="59" r="3" />
          <circle cx="70" cy="59" r="3" />
        </g>
      </g>

      <ConversionBurst />
      <GeneratedPaper />
    </svg>
  );
}

export default function PublicationWorkflowCue({ kind }: PublicationWorkflowCueProps) {
  const label = kind === 'ai' ? 'AI-assisted' : 'Human';

  return (
    <div
      aria-label={`${label} research workflow`}
      className={`workflow-cue workflow-cue-${kind}`}
      role="img"
    >
      {kind === 'ai' ? <AiResearcher /> : <HumanResearcher />}
    </div>
  );
}
