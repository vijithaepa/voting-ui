import student from '../../../assets/img/e-learning/avatar/student.png';

export const memberOverview = {
  info: {
    title: 'member of parliament',
    name: 'Michael Jackson',
    lastUpdate: '03/11/2021',
    age: 75,
    email: 'abc@gmamil.com',
    phoneNo: '+231394820',
    image: student
  },
  voting: {
    positive: {
      votes: [85, 60, 120, 70, 100, 15, 65, 80, 60, 75, 45],
      total: 1043,
      rate: 6.4,
      diff: -5.3
    },
    negative: {
      votes: [55, 60, 40, 120, 70, 80, 35, 80, 85],
      total: 723,
      rate: 8.1,
      diff: -3.5
    }
  },
  politicalHistory: [
    {
      id: 0,
      noOfYears: 12,
      period: '2010',
      title: 'Member of Parliament',
      color: 'success',
      badge: {
        type: 'success',
        icon: 'caret-up'
      }
    },
    {
      id: 1,
      noOfYears: 10,
      period: '2000-2010',
      title: 'Member of Council',
      color: 'primary',
      badge: {
        type: 'danger',
        icon: 'caret-down'
      }
    },
    {
      id: 2,
      noOfYears: 7,
      period: '1992-1999',
      title: 'NGO - Urban Development',
      color: 'info',
      badge: {
        type: 'secondary',
        content: '0.0%'
      }
    },
    {
      id: 3,
      noOfYears: 1,
      period: '1990-1991',
      title: 'Social worker',
      color: 'warning',
      badge: {
        type: 'primary',
        icon: 'plus'
      }
    }
  ],
  ratingHistory: {
    dates: [
      '2020-01-01',
      '2020-02-01',
      '2020-03-01',
      '2020-04-01',
      '2020-05-01',
      '2020-06-01',
      '2020-07-01',
      '2020-08-01',
      '2020-09-01',
      '2020-10-01',
      '2020-11-01',
      '2020-12-01',
      '2021-01-01',
      '2021-02-01',
      '2021-03-01',
      '2021-04-01',
      '2021-05-01',
      '2021-06-01',
      '2021-07-01',
      '2021-08-01',
      '2021-09-01',
      '2021-10-01',
      '2021-11-01',
      '2021-12-01'
    ],
    positive: [
      6.6, 8.2, 9.1, 9.3, 9.2, 8.3, 7.6, 6.6, 6.8, 5.2, 5.3, 6.3, 6.8, 8.2, 9.1,
      9.3, 7.2, 6.8, 5.6, 4.2, 3.8, 3.2, 3.3, 2.7
    ],
    negative: [
      1.1, 1.3, 1.4, 2.1, 2.3, 3.4, 4.2, 4.5, 4.0, 4.3, 4.2, 5.2, 5.1, 4.9, 4.7,
      4.8, 4.2, 3.8, 3.7, 2.1, 2.3, 2.1, 2.1, 1.6
    ]
  },
  educationHistory: [
    {
      qualification: 'Master in Physics',
      institute: 'Deaden Uni',
      date: '01/03/22',
      status: 'Pending',
      color: 'warning'
    },
    {
      qualification: 'Bsc in Microbiology',
      institute: 'Monash Uni',
      date: '01/10/21',
      status: 'Successful',
      color: 'success'
    },
    {
      qualification: 'GCE A/L',
      institute: 'School',
      date: '01/10/18',
      status: 'Failed',
      color: 'danger'
    },
    {
      qualification: 'Diploma in Computer Engineering',
      institute: 'ACS',
      date: '01/10/19',
      status: 'Successful',
      color: 'success'
    },
    {
      qualification: 'Diploma in Computer Engineering',
      institute: 'ACS',
      date: '01/10/19',
      status: 'Successful',
      color: 'success'
    },
    {
      qualification: 'Diploma in Computer Engineering',
      institute: 'ACS',
      date: '01/10/19',
      status: 'Successful',
      color: 'success'
    }
  ],
  recentActivities: [
    {
      id: 0,
      title: 'Lost the seat',
      description: 'On parliamentary election',
      time: '01/10/19',
      icon: 'sign-out-alt'
    },
    {
      id: 1,
      title: 'Appointed a ministry',
      description: 'Appointed as Environment minister',
      time: '21/02/19',
      icon: 'shopping-cart'
    },
    {
      id: 2,
      title: 'Elected to the parliament',
      description: 'On parliamentary election, with 1300 votes',
      time: '10/09/15',
      icon: 'download'
    },
    {
      id: 3,
      title: 'Sent a direct mail to Tra_bil37a8',
      description: 'Tra_bil37a8 is trainer of course#121212 ',
      time: '5h ago',
      icon: 'envelope'
    },
    {
      id: 4,
      title: 'Submitted assignment no.3',
      description: 'Assignment of course#121212 was due yesterday.',
      time: '5h ago',
      icon: 'file-upload'
    }
  ],
  convictions: [
    {
      title: 'Advanced Design Tools for Modern Designs',
      incidentDate: '01/10/21',
      publishedDate: '01/10/21',
      source: 'e-news',
      credibility: 75
    },
    {
      title: 'Character Design Masterclass: Your First Superhero',
      incidentDate: '01/10/21',
      publishedDate: '01/10/21',
      source: 'e-news',
      credibility: 60
    },
    {
      title: 'Script Writing Masterclass: Introdution to Industry Cliches',
      incidentDate: '01/10/21',
      publishedDate: '01/10/21',
      source: 'e-news',
      credibility: 55
    },
    {
      title: 'Abstract Painting: Zero to Mastery in Traditional Medium',
      incidentDate: '01/10/21',
      publishedDate: '03/09/21',
      source: 'e-news',
      credibility: 85
    },
    {
      title: 'Character Design Masterclass: Your First Supervillain',
      incidentDate: '01/10/21',
      publishedDate: '01/10/21',
      source: 'e-news',
      credibility: 25
    },
    {
      title: 'Composition in Comics: Easy to Read Between Panels',
      incidentDate: '01/10/21',
      publishedDate: '31/12/21',
      source: 'e-news',
      credibility: 15
    }
  ]
};
