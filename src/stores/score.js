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
    question42: null
  });

  const sections = {
    corporateCompliance: ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13', 'question14', 'question15', 'question16'],
    legal: ['question17', 'question18', 'question19', 'question20', 'question21', 'question22', 'question23', 'question24', 'question25', 'question26', 'question27', 'question28', 'question29', 'question30', 'question31', 'question32', 'question33', 'question34', 'question35', 'question36', 'question37', 'question38', 'question39', 'question40', 'question41', 'question42']
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

