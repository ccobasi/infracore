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
  });

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
  };

  return {
    answers,
    totalYes,
    totalQuestions,
    percentage,
    evaluateAnswers,
  };
});

