export const missions = [
    {
      id:1,
      bgImg: "mis1",
      title: "Every Girl in school",
      supporters: 356,
      supported: 928,
      left: 2405,
    },
    {
      id:2,
      bgImg: "mis2",
      title: "No child orphaned",
      supporters: 356,
      supported: 928,
      left: 2405,
    },
    {
      id:3,
      bgImg: "mis3",
      title: "No child orphaned",
      supporters: 356,
      supported: 928,
      left: 2405,
    },
  ].map(mission => ({
    ...mission,
    percent: Math.floor((mission.supported / (mission.supported + mission.left)) * 100),
    text: `${mission.supported} supported, ${mission.left} left`,
  }));
  