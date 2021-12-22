<template>
  <div>
    <h1>Create Test</h1>
    <form @submit.prevent>
      <Input label="Enter title" :model-value="test" @update:model-value="setTest" name="test"/>
      <Select text="Type of test: " v-bind:values="['anonymous', 'not anonymous']" :model-value="type"
              @update:model-value="setType"/>
      <hr>
      <div class="array-list" v-for="(item, index) in questions">
        <Input :name="`question_${index + 1}`" :label="index+1" :model-value="item.text"
               @update:model-value="setQuestion({index, key: 'text', event: $event})"
               placeholder="Type a question..."/>
        <Select v-bind:values="['radio', 'checkbox', 'text']" :mode-value="item.type"
                @update:model-value="setQuestion({index, index, key: 'type', event: $event})"
                text="Type: "/>
        <h4 v-if="item.choices.length">Choices: </h4>
        <div class="array-list" v-for="(item, choiceIndex) in item.choices">
          <Input key="item.text" :name="`choice_${index + 1}`" :label="choiceIndex+1" :model-value="item.text"
                 @update:model-value="setChoice({index, choiceIndex, key: 'text', value: $event})"
                 placeholder="Type a choice..."/>
          <div class="choice-options">
            <Select v-bind:values="['no', 'yes']"
                    @update:model-value="setChoice({index, choiceIndex, key: 'correct', value: $event === 'yes'})"
                    text="Correct: "/>
          </div>
        </div>
        <div class="title">Create choice:
          <Button @click="setChoices({index, text: '',correct: false})" name="add-choice">
            <font-awesome-icon :icon="['fas', 'plus-square']" size="2x"/>
          </Button>
        </div>
      </div>
      <div class="title">Create question:
        <Button
            @click="setQuestions({
                text: '',
                note: 0,
                type: '',
                choices: []
            })"
            name="add-question">
          <font-awesome-icon :icon="['fas', 'plus-square']" size="2x"/>
        </Button>
      </div>
      <div>
        <Button @click="createTest({userId, test, type, questions})" name="add-test">Create test</Button>
      </div>
    </form>
  </div>
</template>

<script>
import Input from "@/components/Input";
import Button from "@/components/Button"
import Select from "@/components/Select";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "Test",
  components: {Select, Input, Button},
  methods: {
    ...mapMutations({
      setTest: 'test/setTest',
      setType: 'test/setType',
      setQuestions: 'test/setQuestions',
      setChoices: 'test/setChoices',
      setQuestion: 'test/setQuestion',
      setChoice: 'test/setChoice'
    }),
    ...mapActions({
      createTest: 'test/createTest'
    })
  },
  computed: {
    ...mapState({
      questions: state => state.test.questions,
      test: state => state.test.test,
      type: state => state.test.type
    }),
    ...mapGetters({
      userId: 'getUserId'
    })
  }
}
</script>

<style scoped>

form {
  width: 800px;
  margin: 0 auto;
}

.title {
  display: flex;
  align-items: center;
}

.title button {
  margin-left: 10px;
  padding: 0;
}

.title button svg {
  color: teal;
}

.array-list {
  margin-left: 20px;
  margin-top: 10px;
}

.choice-options {
  display: grid;
  grid-template-columns: min-content min-content;
  align-items: center;
}

</style>