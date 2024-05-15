#include <stddef.h> // For NULL definition
#include <stdlib.h> // For malloc and free functions
#include "lists.h"

/**
 * Definition for singly-linked list.
 * struct listint_s {
 * 	int n;
 * 	struct listint_S *next;
 * };
 * typedef struct listint_s listint_t;
 */

/**
 * is_palindrome - Checks if a singly linked list is a palindrome
 * @head: Pointer to pointer to the head of the list
 * Return: 0 if it is not a palindrome, 1 if it is a palindrome
 */
int is_palindrome(listint_t **head)
{
	listint_t *current = *head;
	int *array;
	int size = 0; // To store the size of the list

	// Empty list is considered a palindrome
	if (current == NULL)
		return 1;

	// Calculate the size of the list
	while (current != NULL)
	{
		size ++;
		current = current->next;
	}

	// Allocate memory for the array dynamically
	array = malloc(size * sizeof(int));
	if (array == NULL)
		return 0; // Memory allocation failed, not a palindrome

	// Reset current pointer to the head of the list
	current = *head;

	// Store elements of the list in the array
	for (int i = 0; i < size; i++)
	{
		array[i] = current->n;
		current = current->next;
	}

	// Compare elements from the start and end of the array
	for (int i = 0, j = size - 1; i < j; i++, j--)
	{
		if (array[i] != array[j])
		{
			free(array); // Free dynamically allocated memory
			return 0; // Not a palindrome
		}
	}

	free(array); // Free dynamically allocated memory
	return 1;
}
