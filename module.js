export function gameData() {
  return {
    passages: [
      {
        text: "You are woken up by a bang.\nYour room is dark, but bright sunlight filters through the curtains.\n[[Check the time on your phone->2]]",
        links: [
          {
            name: "Check the time on your phone",
            link: "2",
            pid: "2",
          },
        ],
        name: "1",
        pid: "1",
        position: {
          x: "513",
          y: "191",
        },
        tags: ["passage"],
      },
      {
        text: "Double-click this passage to edit it.\n\n\n[[go to second passage ->3]]\n[[go to THIRD passage ->4]]",
        links: [
          {
            name: "go to second passage ",
            link: "3",
            pid: "3",
          },
          {
            name: "go to THIRD passage ",
            link: "4",
            pid: "4",
          },
        ],
        name: "2",
        pid: "2",
        position: {
          x: "477",
          y: "386",
        },
      },
      {
        text: "secnod passage wow\n\n[[answer option 1->5]]\n[[answer option 2->6]]",
        links: [
          {
            name: "answer option 1",
            link: "5",
            pid: "5",
          },
          {
            name: "answer option 2",
            link: "6",
            pid: "6",
          },
        ],
        name: "3",
        pid: "3",
        position: {
          x: "477",
          y: "536",
        },
      },
      {
        text: "third passage alskdjfals;dkjfa\n\n[[answer option 3->7]]\n[[answer option 4->8]]",
        links: [
          {
            name: "answer option 3",
            link: "7",
            pid: "7",
          },
          {
            name: "answer option 4",
            link: "8",
            pid: "8",
          },
        ],
        name: "4",
        pid: "4",
        position: {
          x: "1062",
          y: "531",
        },
      },
      {
        text: "Double-click this passage to edit it.",
        name: "5",
        pid: "5",
        position: {
          x: "402",
          y: "686",
        },
      },
      {
        text: "Double-click this passage to edit it.",
        name: "6",
        pid: "6",
        position: {
          x: "552",
          y: "686",
        },
      },
      {
        text: "Double-click this passage to edit it.",
        name: "7",
        pid: "7",
        position: {
          x: "874",
          y: "691",
        },
      },
      {
        text: "Double-click this passage to edit it.",
        name: "8",
        pid: "8",
        position: {
          x: "1137",
          y: "681",
        },
      },
    ],
    name: "test",
    startnode: "1",
    creator: "Twine",
    "creator-version": "2.3.14",
    ifid: "EF09B502-F76C-44D5-A421-A4320A34536E",
  };
}