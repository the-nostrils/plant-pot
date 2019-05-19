import { ADD_PLANT, DELETE_PLANT } from '../actions/actionTypes';

const initialState = {
  trackedPlantList: [],
  plantList: [
    {
      id: 1,
      name: 'Onion',
      size: 'small',
      levelOfExpertise: 1,
      season: 'Sow',
      plantTime: [3, 4],
      harvestTime: [7, 8, 9],
      family: 'Liliaceae',
      waterNeedLevel: 'medium',
      commonProblems: ['Leek Rust', 'Onion White Rot', 'Onion Downy Mildew'],
      exposure: 'High',
      climate: '16-24°C'
    },
    {
      id: 2,
      name: 'Spinach',
      size: 'medium',
      levelOfExpertise: 1,
      season: 'Sow',
      plantTime: [3, 4, 5, 8, 9],
      harvestTime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      family: 'Amaranthaceae',
      waterNeedLevel: 'high',
      commonProblems: ['Birds', 'Bolting', 'Spinach downy mildew'],
      exposure: 'Winter cultivars need sunny position',
      climate: '16-18°C'
    },
    {
      id: 3,
      name: 'Garlic',
      size: 'small',
      levelOfExpertise: 1,
      season: 'Sow',
      plantTime: [1, 2, 10, 11, 12],
      harvestTime: [6, 7, 8],
      family: 'Herbaceous',
      waterNeedLevel: 'medium',
      commonProblems: ['Onion white rot', 'Leek rust', 'Birds'],
      exposure: 'High',
      climate: '13-24°C'
    },
    {
      id: 4,
      name: 'Lettuce',
      size: 'small',
      levelOfExpertise: 1,
      season: 'Sow',
      plantTime: [3, 4, 5, 6, 7, 8, 9],
      harvestTime: [5, 6, 7, 8, 9, 10, 11, 12],
      family: 'Asteraceae',
      waterNeedLevel: 'medium',
      commonProblems: ['Slugs and snails', 'Grey mould', 'Bolting'],
      exposure: 'High',
      climate: '2°C (Min.)'
    },
    {
      id: 5,
      name: 'Brussel Sprouts',
      size: 'medium',
      levelOfExpertise: 2,
      season: 'Sow',
      plantTime: [2, 3, 4, 5],
      harvestTime: [1, 2, 3, 9, 10, 11, 12],
      family: 'Crucifers',
      waterNeedLevel: 'high',
      commonProblems: ['Birds', 'Club Root', 'Cabbage Root Fly'],
      exposure: 'High',
      climate: '16-18°C'
    },
    {
      id: 6,
      name: 'Parsley',
      size: 'small',
      levelOfExpertise: 1,
      season: 'Sow',
      plantTime: [3, 4, 5, 6],
      harvestTime: [6, 7, 8],
      family: 'Apiaceae',
      waterNeedLevel: 'high',
      commonProblems: ['Carrot Fly', 'Celery Leaf Miner', 'Carrot Motley Dwarf Virus'],
      exposure: 'Winter cultivars need sunny position',
      climate: '7°C (Min.)'
    },
    {
      id: 7,
      name: 'Carrot',
      season: 'Sow',
      plantTime: [2, 3, 4, 5, 6, 7],
      harvestTime: [5, 6, 7, 8, 9, 10],
      levelOfExpertise: 2,
      family: 'Umbelliferae',
      size: 'small',
      waterNeedLevel: 'medium',
      commonProblems: ['Carrot Fly', 'Aphids', 'Forked Carrots'],
      exposure: 'High',
      climate: '7°C (Min.)'
    },
    {
      id: 8,
      name: 'Peas',
      season: 'Sow',
      plantTime: [2, 3, 4, 5],
      harvestTime: [6, 7, 8, 9, 10],
      levelOfExpertise: 2,
      family: 'Fabaceae',
      size: 'large',
      waterNeedLevel: 'high',
      commonProblems: ['Pea Moth', 'Mice', 'Powdery Mildew '],
      exposure: 'High',
      climate: '9°C (Min.)'
    },
    {
      id: 9,
      name: 'Rosemary',
      season: 'Sow',
      plantTime: [3, 4, 5],
      harvestTime: [5, 6, 7, 8, 9, 10],
      levelOfExpertise: 1,
      family: 'Lamiaceae',
      size: 'small',
      waterNeedLevel: 'low',
      commonProblems: ['Frost Damage', 'Scale Insects', 'Rosemary Beetle'],
      exposure: 'High',
      climate: '9°C (Min.)'
    },
    {
      id: 10,
      name: 'Peppers',
      season: 'Sow',
      plantTime: [2, 3, 4],
      harvestTime: [7, 8, 9, 10, 11],
      levelOfExpertise: 2,
      family: 'Pepper',
      size: 'small',
      waterNeedLevel: 'high',
      commonProblems: ['Aphids', 'Blossom End Rot', 'Glasshouse Red Spider'],
      exposure: 'Medium',
      climate: '18-21°C'
    },
    {
      id: 11,
      name: 'Tomatoes',
      season: 'Sow',
      plantTime: [2, 3, 4],
      harvestTime: [7, 8, 9],
      levelOfExpertise: 2,
      family: 'Solanaceae',
      size: 'small',
      waterNeedLevel: 'high',
      commonProblems: ['Tomato Blight', 'Blossom End Rot', 'Tomato Leaf Mould'],
      exposure: 'High',
      climate: '13°C'
    },
    {
      id: 12,
      name: 'Beetroot',
      season: 'Sow',
      plantTime: [3, 4, 5, 6, 7],
      harvestTime: [6, 7, 8, 9, 10],
      levelOfExpertise: 1,
      family: 'Amaranthaceae',
      size: 'small',
      waterNeedLevel: 'high',
      commonProblems: ['Bolting'],
      exposure: 'Medium',
      climate: '13°C'
    },
    {
      id: 13,
      name: 'Zucchini',
      season: 'Sow',
      plantTime: [4, 5],
      harvestTime: [7, 8, 9, 10],
      levelOfExpertise: 2,
      family: 'Crucifers',
      size: 'medium',
      waterNeedLevel: 'low',
      commonProblems: ['Powdery Mildew', 'Grey Mould'],
      exposure: 'High',
      climate: '13°C'
    },
    {
      id: 14,
      name: 'Corn',
      season: 'Sow',
      plantTime: [4, 5, 6],
      harvestTime: [6, 7, 8, 9, 10],
      levelOfExpertise: 1,
      family: 'Poaceae',
      size: 'medium',
      waterNeedLevel: 'high',
      commonProblems: ['Mice', 'Birds', 'Slugs and Snails'],
      exposure: 'Low',
      climate: '13°C'
    },
    {
      id: 15,
      name: 'Potatoes',
      season: 'Sow',
      plantTime: [3, 4, 5],
      harvestTime: [5, 6, 7, 8, 9, 10],
      levelOfExpertise: 1,
      family: 'Potatoe',
      size: 'small',
      waterNeedLevel: 'high',
      commonProblems: ['Potato Blight', 'Potato Blackleg', 'Potato Scab'],
      exposure: 'High',
      climate: '13°C'
    },
    {
      id: 16,
      name: 'White Head Cabbage',
      season: 'Sow',
      plantTime: [2, 3, 4, 5, 6, 7, 8, 9],
      harvestTime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      levelOfExpertise: 2,
      family: 'Asteraceae',
      size: 'medium',
      waterNeedLevel: 'medium',
      commonProblems: ['Cabbage Root Fly', 'Caterpillars', 'Club Root'],
      exposure: 'Medium',
      climate: '13°C'
    },
    {
      id: 17,
      name: 'Broccoli',
      season: 'Sow',
      plantTime: [4, 5, 6, 7],
      harvestTime: [2, 3, 4, 7, 8, 9, 10],
      levelOfExpertise: 2,
      family: 'Brassicaceae',
      size: 'medium',
      waterNeedLevel: 'high',
      commonProblems: ['Birds', 'Caterpillars', 'Club Root'],
      exposure: 'High',
      climate: '13°C'
    },
    {
      id: 18,
      name: 'Okra',
      season: 'Sow',
      plantTime: [5, 6],
      harvestTime: [6, 7, 8, 9, 10],
      levelOfExpertise: 2,
      family: 'Okra',
      size: 'small',
      waterNeedLevel: 'high',
      commonProblems: ['Glasshouse Red Spider', 'Whitefly', 'Aphids'],
      exposure: 'Medium',
      climate: '13°C'
    },
    {
      id: 19,
      name: 'Leek',
      season: 'Sow',
      plantTime: [5, 6, 7],
      harvestTime: [1, 2, 6, 8, 9, 10, 11, 12],
      levelOfExpertise: 2,
      family: 'Leek',
      size: 'small',
      waterNeedLevel: 'medium',
      commonProblems: ['Leeks Rust', 'Onion White Rot', 'Leek Moth'],
      exposure: 'Medium',
      climate: '13°C'
    },
    {
      id: 20,
      name: 'Celery Root',
      season: 'Sow',
      plantTime: [5, 6],
      harvestTime: [8, 9, 10, 11],
      levelOfExpertise: 3,
      family: 'Celery Root',
      size: 'small',
      waterNeedLevel: 'medium',
      commonProblems: ['Slugs and Snails'],
      exposure: 'Full sun',
      climate: '13°C'
    },
    {
      id: 21,
      name: 'White Radish',
      season: 'Sow',
      plantTime: [3, 4],
      harvestTime: [10, 11],
      levelOfExpertise: 1,
      family: 'White Radish',
      size: 'small',
      waterNeedLevel: 'medium',
      commonProblems: ['-'],
      exposure: 'Medium',
      climate: '13°C'
    },
    {
      id: 22,
      name: 'Radish',
      season: 'Sow',
      plantTime: [2, 3, 4, 5, 6, 7, 8],
      harvestTime: [1, 2, 4, 5, 6, 7, 10, 11, 12],
      levelOfExpertise: 1,
      family: 'Brassicaceae',
      size: 'small',
      waterNeedLevel: 'medium',
      commonProblems: ['Flea Beetle'],
      exposure: 'High',
      climate: '13°C'
    },
    {
      id: 23,
      name: 'Yellow Zucchini',
      season: 'Sow',
      plantTime: [4, 5, 6],
      harvestTime: [7, 8, 9, 10],
      levelOfExpertise: 1,
      family: 'Crucifers',
      size: 'small',
      waterNeedLevel: 'medium',
      commonProblems: ['Powdery Mildew', 'Grey Mould'],
      exposure: 'High',
      climate: '13°C'
    },
    {
      id: 24,
      name: 'Aubergine',
      season: 'Sow',
      plantTime: [5, 6],
      harvestTime: [7, 8, 9],
      levelOfExpertise: 3,
      family: 'Solamaceae',
      size: 'medium',
      waterNeedLevel: 'high',
      commonProblems: ['Glasshouse Red Spider', 'Whitefly', 'Aphids'],
      exposure: 'Medium',
      climate: '13°C'
    },
    {
      id: 25,
      name: 'Cucumber',
      season: 'Sow',
      plantTime: [3, 4, 5, 6],
      harvestTime: [7, 8, 9, 10, 11],
      levelOfExpertise: 2,
      family: 'Cucurbitaceae',
      size: 'medium',
      waterNeedLevel: 'medium',
      commonProblems: ['Whitefly', 'Cucumber Mosaic Virus', 'Powdery Mildew'],
      exposure: 'High',
      climate: '21-27°C'
    },
    {
      id: 26,
      name: 'Roquette',
      season: 'Sow',
      plantTime: [4, 5],
      harvestTime: [6, 7, 8, 9, 10, 11, 12],
      levelOfExpertise: 1,
      family: 'Cabbage',
      size: 'small',
      waterNeedLevel: 'medium',
      commonProblems: ['Flea Beetle', 'Bolting'],
      exposure: 'Low',
      climate: '10-18°C'
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLANT: {
      const { id } = action.payload.plant;
      const { plantList } = state;
      const updatedTrackedPlantList = [...state.trackedPlantList];

      const [newPlantToPush] = plantList.filter(item => item.id === id);
      updatedTrackedPlantList.push(newPlantToPush);

      return {
        ...state,
        trackedPlantList: updatedTrackedPlantList
      };
    }
    case DELETE_PLANT: {
      const { id } = action.payload.plant;
      const updatedTrackedPlantList = state.trackedPlantList.filter(post => post.id !== id);

      return {
        ...state,
        trackedPlantList: updatedTrackedPlantList
      };
    }
    default:
      return state;
  }
};

export default reducer;
