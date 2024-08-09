import React, { Component } from "react";
import "./Faq.scss";

export default class Faq extends Component {
  render() {
    return (
      <div className="faq">
        <hr className="faq_hr" />
        <div className="faq_desc">
          <h1 className="faq_title">ФАҚ</h1>
          <div className="acc">
            <details className="accordion">
              <summary className="accordion-btn">
                Чем Производится Уничтожение Вредителей?
              </summary>
              <div className="accordion-content">
                <p>
                  При помощи специального оборудования инсектициды превращаются
                  в аэрозольный туман и проникают в мельчайшие зазоры между
                  обоями, стенами и плинтусами, в невидимые глазу потенциальные
                  «укрытия» насекомых.
                </p>
              </div>
            </details>

            <details className="accordion">
              <summary className="accordion-btn">
                Опасны Ли Используемые Вами Препараты?
              </summary>
              <div className="accordion-content">
                <p>
                  Для людей, домашних питомцев и растений препараты не
                  представляют опасности. Но после обработки помещение
                  необходимо всё же проветрить в течение 40 минут.
                </p>
              </div>
            </details>

            <details className="accordion">
              <summary className="accordion-btn">
                Мне Нужно Как-То Подготовить Свой Дом Для Обработки?
              </summary>
              <div className="accordion-content">
                <p>
                  В основном нужно изолировать посуду и средства личной гигиены.
                  Также нужно изолировать домашних животных на время обработки.
                  Передвигать мебель и бытовую технику не требуется.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    );
  }
}
