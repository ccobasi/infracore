// src/stores/answers.js
import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';

export const useAnswersStore = defineStore('answers', () => {
  const answers = reactive({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
    question8: null,
    question9: null,
    question10: null,
    question11: null,
    question12: null,
    question13: null,
    question14: null,
    question15: null,
    question16: null,
    question17: null,
    question18: null,
    question19: null,
    question20: null,
    question21: null,
    question22: null,
    question23: null,
    question24: null,
    question25: null,
    question26: null,
    question27: null,
    question28: null,
    question29: null,
    question30: null,
    question31: null,
    question32: null,
    question33: null,
    question34: null,
    question35: null,
    question36: null,
    question37: null,
    question38: null,
    question39: null,
    question40: null,
    question41: null,
    question42: null,
    question43: null,
    question44: null,
    question45: null,
    question46: null,
    question47: null,
    question48: null,
    question49: null,
    question50: null,
    question51: null,
    question52: null,
    question53: null,
    question54: null,
    question55: null,
    question56: null,
    question57: null,
    question58: null,
    question59: null,
    question60: null,
    question61: null,
    question62: null,
    question63: null,
    question64: null,
    question65: null,
    question66: null,
    question67: null,
    question68: null,
    question69: null,
    question70: null,
    question71: null,
    question72: null,
    question73: null,
    question74: null,
    question75: null,
    question76: null,
    question77: null,
    question78: null,
    question79: null,
    question80: null,
    question81: null,
    question82: null,
    question83: null,
    question84: null,
    question85: null,
  });

  const sections = {
    corporateCompliance: ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13', 'question14', 'question15', 'question16'],
    legal: ['question17', 'question18', 'question19', 'question20', 'question21', 'question22', 'question23', 'question24', 'question25', 'question26', 'question27', 'question28', 'question29', 'question30', 'question31', 'question32', 'question33', 'question34', 'question35', 'question36', 'question37', 'question38', 'question39', 'question40', 'question41', 'question42', 'question43'],
    technical: [
      'question44', 'question45', 'question46', 'question47', 'question48',
      'question49', 'question50', 'question51', 'question52', 'question53',
      'question54', 'question55', 'question56', 'question57', 'question58',
      'question59', 'question60'
    ],
    environmentalSocial: [
      'question61', 'question62', 'question63', 'question64', 'question65',
      'question66', 'question67', 'question68', 'question69', 'question70',
      'question71', 'question72', 'question73', 'question74', 'question75',
      'question76', 'question77', 'question78', 'question79', 'question80',
      'question81', 'question82', 'question83', 'question84', 'question85',
    ],
  };

  const sectionScore = (section) => {
    const sectionQuestions = sections[section];
    const yesCount = sectionQuestions.reduce((sum, question) => sum + (answers[question] === '1' ? 1 : 0), 0);
    return sectionQuestions.length > 0 ? (yesCount / sectionQuestions.length) * 100 : 0;
  };

  const totalYes = computed(() => {
    return Object.values(answers).reduce((sum, val) => sum + (val === '1' ? 1 : 0), 0);
  });

  const totalQuestions = computed(() => {
    return Object.keys(answers).length;
  });

  const percentage = computed(() => {
    return totalQuestions.value > 0 ? (totalYes.value / totalQuestions.value) * 100 : 0;
  });

  const evaluateAnswers = () => {
    console.log(`Total Yes: ${totalYes.value}, Percentage: ${percentage.value}%`);
    console.log(`Corporate Compliance Score: ${sectionScore('corporateCompliance')}`);
    console.log(`Legal Section Score: ${sectionScore('legal')}`);
    console.log(`Technical Section Score: ${sectionScore('technical')}`);
    console.log(`Environmental & Social Section Score: ${sectionScore('environmentalSocial')}`);
  };

  return {
    answers,
    totalYes,
    totalQuestions,
    percentage,
    sectionScore,
    evaluateAnswers,
  };
});

