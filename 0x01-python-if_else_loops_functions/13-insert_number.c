#include "lists.h"
#include <stdio.h>
#include <stdlib.h>

/**
 * insert_node - inserts a number in a sorted singly list
 * @head: pointer to a pointer to the first node of the linked list
 * @number: the number to insert into the list
 * Return: the address of the new node, or NULL if it failed
 */

listint_t *insert_node(listint_t **head, int number)
{
	listint_t *new_node, *current;

	/* Allocate memory for the new node */
	new_node = malloc(sizeof(listint_t));
	if (new_node == NULL)
		return NULL;

	new_node->n = number;
	new_node->next = NULL;

	/* If the list is empty or the new node's data is less than the first node's data */
	if (*head == NULL || number < (*head)->n)
	{
		new_node->next = *head;
		*head = new_node;
		return new_node;
	}

	/* Traverse the list to find the appropriate position to insert the new node */
	current = *head;
	while (current->next != NULL && current->next->n < number) {
		current = current->next;
	}

	/* Insert the new node after the current node */
	new_node->next = current->next;
	current->next = new_node;

	return (new_node);
}
