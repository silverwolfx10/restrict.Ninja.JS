/**
 * $restrict
 *
 * Remove as propriedades de a se nao existir uma propriedade
 * com o mesmo nome em b, a funcao curry
 *
 * @module $restrict
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 *
 *        $restrict({ a: '', b: '' }, { c: '' });
 *
 */
this.Ninja.module('$restrict', ['$curry'], function ($curry) {

  /**
   * Remove as propriedades de a se nao existir uma propriedade
   * com o mesmo nome em b
   *
   * @public
   * @method restrict
   * @param {Object} a Primeiro objeto
   * @param {Object} b Segundo objeto
   * @return {Object} Primeiro objeto com as propriedades existente em b
   * @example
   *
   *        $restrict({ a: '', b: '' }, { c: '' });
   *
   */
  function restrict(a, b) {
    for (key in a) if (!(key in b)) delete a[key];
    return a;
  }

  /**
   * Revelacao do modulo $restrict, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(restrict);

});
